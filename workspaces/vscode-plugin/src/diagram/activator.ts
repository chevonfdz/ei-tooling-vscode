import {ExtendedLangClient} from "../extended-language.client";
import {
    commands,
    Disposable,
    ExtensionContext, Position, Range, TextDocumentShowOptions,
    Uri,
    ViewColumn,
    WebviewPanel,
    window,
    workspace,
    WorkspaceEdit
} from "vscode";
import {DiagramOptions} from "./model";
import {join, sep} from "path";
import {WebViewRPCHandler} from "../rpc/handler";
import {existsSync, readFileSync} from "fs";
import {render} from "./renderer";
import {getCommonWebViewOptions} from "../utils/webview-utils";
import {WebViewMethod} from "../rpc/model";

let diagramElement: DiagramOptions | undefined = undefined;
let langClient: ExtendedLangClient;
let webviewRPCHandler: WebViewRPCHandler;
let currentDocumentURI: Uri;
let diagramContext: ExtensionContext;

export let hasDiagram: boolean = false;


export function activate(extendedLangClient: ExtendedLangClient, context: ExtensionContext) {

    langClient = extendedLangClient;
    diagramContext = context;

    const diagramRenderDisposable = commands.registerCommand('synapse.show.diagram', (...args: any[]) => {
        let path: any;
        if (args.length > 0) {
            path = args[0];
        } else {
            if(window.activeTextEditor) {
                path = window.activeTextEditor.document.uri.fsPath;
            } else {
                path = '';
            }
        }
        if (args[0] instanceof Uri) {
            path = args[0].fsPath;
        }

        let ignoreFileCheck = false;
        if (args.length > 2) {
            ignoreFileCheck = args[2];
        }

        //editor-lowcode-editor
        // sendTelemetryEvent(ballerinaExtInstance, TM_EVENT_OPEN_LOW_CODE, CMP_DIAGRAM_VIEW);
        showDiagramEditor(0, 0, path, !ignoreFileCheck);
    });

    context.subscriptions.push(diagramRenderDisposable);

}

export async function showDiagramEditor(startLine: number, startColumn: number, filePath: string,
                                        isCommand: boolean = false): Promise<void> {

    // if (openInDiagram) {
    //     openNodeInDiagram = openInDiagram;
    // }

    const editor = window.activeTextEditor;
    if (isCommand) {
        if (!editor || !editor.document.fileName.endsWith('.xml')) {
            const message = 'Current file is not a Synapse XML file.';
            // sendTelemetryEvent(ballerinaExtension, TM_EVENT_ERROR_EXECUTE_DIAGRAM_OPEN, CMP_DIAGRAM_VIEW, getMessageObject(message));
            window.showErrorMessage(message);
            return;
        }
    }

    if (isCommand) {
        if (!editor) {
            // window.showErrorMessage(CMP_DIAGRAM_VIEW);
            return;
        }

        diagramElement = {
            fileUri: editor!.document.uri,
            startLine: editor!.selection.active.line,
            startColumn: editor!.selection.active.character,
            isDiagram: true,
            diagramFocus: {
                fileUri: editor!.document.uri.path,
                // position: openInDiagram
            },
            workspaceName: workspace.name
        };
    } else {
        diagramElement = {
            fileUri: filePath === '' ? editor!.document.uri : Uri.file(filePath),
            startLine,
            startColumn,
            isDiagram: true,
            diagramFocus: {
                fileUri: (filePath === '' ? editor!.document.uri : Uri.file(filePath)).path,
                // position: openInDiagram
            },
            workspaceName: workspace.name
        };
    }

    DiagramPanel.create(isCommand ? ViewColumn.Two : ViewColumn.One);
}

export function getLangClient(): ExtendedLangClient {
    return langClient;
}

class DiagramPanel {
    public static currentPanel: DiagramPanel | undefined;
    private readonly webviewPanel: WebviewPanel;
    private disposables: Disposable[] = [];


    private constructor(panel: WebviewPanel) {
        this.webviewPanel = panel;
        this.update();
        this.webviewPanel.onDidDispose(() => this.dispose(), null, this.disposables);
    }

    public static create(viewColumn: ViewColumn) {
        if (DiagramPanel.currentPanel && DiagramPanel.currentPanel.webviewPanel.viewColumn
            && DiagramPanel.currentPanel.webviewPanel.viewColumn == viewColumn) {
            DiagramPanel.currentPanel.webviewPanel.reveal();
            DiagramPanel.currentPanel.update();
            // ballerinaExtension.setDiagramActiveContext(true);
            return;
        } else if (DiagramPanel.currentPanel) {
            DiagramPanel.currentPanel.dispose();
        }

        const fileName: string | undefined = getCurrentFileName();
        const panel = window.createWebviewPanel(
            'ballerinaDiagram',
            `Overview Diagram`,
            { viewColumn, preserveFocus: false },
            getCommonWebViewOptions(diagramContext)
        );
        hasDiagram = true;
        // ballerinaExtension.setDiagramActiveContext(true);
        // panel.iconPath = {
        //     light: Uri.file(join(ballerinaExtension.context!.extensionPath, 'resources/images/icons/design-view.svg')),
        //     dark: Uri.file(join(ballerinaExtension.context!.extensionPath,
        //         'resources/images/icons/design-view-inverse.svg'))
        // };

        // panel.onDidChangeViewState(event => {
        //     event.webviewPanel.active ? ballerinaExtension.setDiagramActiveContext(true) :
        //         ballerinaExtension.setDiagramActiveContext(false);
        // });

        const remoteMethods: WebViewMethod[] = [
            {
                methodName: "gotoSource",
                handler: async (args: any[]): Promise<boolean> => {
                    const filePath = args[0];
                    const position: { startLine: number, startColumn: number } = args[1];
                    if (!existsSync(filePath)) {
                        return false;
                    }
                    const showOptions: TextDocumentShowOptions = {
                        preserveFocus: false,
                        preview: false,
                        viewColumn: ViewColumn.Two,
                        selection: new Range(position.startLine, position.startColumn, position.startLine!, position.startColumn!)
                    };
                    const status = commands.executeCommand('vscode.open', Uri.file(filePath), showOptions);
                    return !status ? false : true;
                }
            },
            {
                methodName: "getFileContent",
                handler: async (args: any[]): Promise<string | undefined> => {
                    // Get the active text editor
                    const filePath = "C:/Users/Rukshanf/Desktop/test.xml";
                    const doc = workspace.textDocuments.find((doc) => doc.fileName === filePath);
                    if (doc) {
                        return doc.getText();
                    }
                    return readFileSync(filePath, { encoding: 'utf-8' });
                }
            }
        ];

        webviewRPCHandler = WebViewRPCHandler.create(panel, langClient, remoteMethods);
        DiagramPanel.currentPanel = new DiagramPanel(panel);
    }

    public dispose() {
        // ballerinaExtension.setDiagramActiveContext(false);
        DiagramPanel.currentPanel = undefined;
        this.webviewPanel.dispose();
        this.disposables.forEach(disposable => {
            disposable.dispose();
        });
        hasDiagram = false;
    }

    private update() {
        if (diagramElement && diagramElement.isDiagram) {
            if (!DiagramPanel.currentPanel) {
                performDidOpen();
                this.webviewPanel.webview.html = render(
                    diagramContext,
                    diagramElement!.fileUri!,
                    diagramElement!.startLine!,
                    diagramElement!.startColumn!,
                    this.webviewPanel.webview,
                    diagramElement!.diagramFocus
                );
            } else {
                callUpdateDiagramMethod();
            }
        }
    }

    public updateTitle(title: string) {
        if (this.webviewPanel.title === title) {
            return;
        }
        this.webviewPanel.title = title;
    }
}

function getCurrentFileName(): string | undefined {
    if (!diagramElement || !diagramElement!.fileUri) {
        return undefined;
    }
    return diagramElement!.fileUri!.fsPath.split(sep).pop();
}

export function updateDiagramElement(element: DiagramOptions | undefined) {
    diagramElement = element;
}

function performDidOpen() {
    let tempUri: Uri | undefined;
    if (diagramElement!.fileUri) {
        tempUri = diagramElement?.fileUri!;
    }
    if (!tempUri) {
        return;
    }
    // ballerinaExtension.getDocumentContext().setLatestDocument(tempUri);
    const doc = workspace.textDocuments.find((doc) => doc.uri === tempUri);
    if (doc) {
        return;
    }
    if (currentDocumentURI !== tempUri!) {
        const content: string = readFileSync(tempUri.fsPath, { encoding: 'utf-8' });
        langClient.didOpen({
            textDocument: {
                uri: tempUri.toString(),
                languageId: 'Synapse',
                version: 1,
                text: content
            }
        });
        currentDocumentURI = tempUri;
    }
}

export function callUpdateDiagramMethod() {
    performDidOpen();
    let ballerinaFilePath = diagramElement!.fileUri!.fsPath;
    const fileName: string | undefined = getCurrentFileName();
    DiagramPanel.currentPanel?.updateTitle(fileName ? `${fileName} Diagram` : `Synapse Diagram`);
    const args = [{
        filePath: ballerinaFilePath,
        startLine: diagramElement!.startLine,
        startColumn: diagramElement!.startColumn
    }];
    webviewRPCHandler.invokeRemoteMethod('updateDiagram', args, () => { });
}