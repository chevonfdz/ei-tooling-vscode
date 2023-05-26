/*
Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/

import { Uri, workspace } from "vscode";

export namespace Settings {

    export namespace External {
        export function javaHome(): string | undefined {
            return workspace.getConfiguration("java").get<string>("home");
        }

        export function defaultWindowsShell(): string | undefined {
            return workspace.getConfiguration("terminal").get<string>("integrated.shell.windows");
        }
    }

    export namespace Terminal {
        export function useJavaHome(): boolean | undefined {
            return _getMavenSection("terminal.useJavaHome");
        }

        export function customEnv(): {
            environmentVariable: string;
            value: string;
        }[] | undefined {
            return _getMavenSection("terminal.customEnv");
        }

        export function favorites(resource: Uri): { alias: string; command: string }[] | undefined {
            return _getMavenSection("terminal.favorites", resource);
        }
    }

    export namespace Executable {
        export function path(resource: Uri | null): string | undefined {
            if (resource) {
                return _getMavenSection("executable.path", resource);
            }
        }

        export function options(resource: Uri): string | undefined {
            return _getMavenSection("executable.options", resource);
        }

        export function preferMavenWrapper(resource?: Uri): boolean | undefined {
            return _getMavenSection("executable.preferMavenWrapper", resource);
        }
    }

    function _getMavenSection<T>(section: string, resource?: Uri): T | undefined {
        return workspace.getConfiguration("maven", resource).get<T>(section);
    }

    export function getEnvironment(): {} {
        const customEnv: any = _getJavaHomeEnvIfAvailable();
        type EnvironmentSetting = {
            environmentVariable: string;
            value: string;
        };
        const environmentSettings: EnvironmentSetting[] | undefined = Terminal.customEnv();

        if (typeof environmentSettings !== "undefined") {
            environmentSettings.forEach((s: EnvironmentSetting) => {
                customEnv[s.environmentVariable] = s.value;
            });
        }
        return customEnv;
    }

    function _getJavaHomeEnvIfAvailable(): {} {
        // Look for the java.home setting from the redhat.java extension.  We can reuse it
        // if it exists to avoid making the user configure it in two places.
        const javaHome: string | undefined = External.javaHome();
        const useJavaHome: boolean | undefined = Terminal.useJavaHome();
        if (useJavaHome && javaHome) {
            return { JAVA_HOME: javaHome };
        } else {
            return {};
        }
    }
}
