import React, { Component } from 'react';
import { Col, Form, Modal, Row, Button } from 'react-bootstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/theme-github';
type Props = {};
type State = {
  showParameterNameModal: boolean;
  inputValue: any,
  pathValue: any,
  selectedExpressionSelector: string,
  data: string,
  prefix: string,
  uri: string,
  selectedInput: string,
  xmlContent: any,
  isDataSaved: boolean;
  namespaces: string[],
};
export default class ExpressionSelectorModel extends Component<Props, State> {
  fileInput: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      isDataSaved: false,
      showParameterNameModal: false, //use this to show/hide the modal
      inputValue: '', //use this to store the value of the input field
      pathValue: '', //use this to store the value of the ExpressionSelectorPath field
      selectedExpressionSelector: 'XML',
      data: '',
      prefix: '',
      uri: '',
      selectedInput: 'EnterXML',
      xmlContent: null,
      namespaces: [],
    };
    this.fileInput = React.createRef(); //use this to store the reference of the file input
  };

  //Parameter Model [to connect the XML Registry] (Line 42-50)
  handleParameterNameShowModal = () => {
    this.setState({ showParameterNameModal: true });
  };
  handleParameterNameHideModal = () => {
    this.setState({ showParameterNameModal: false });
  };
  handleParameterNameSave = () => {
    this.handleParameterNameHideModal();
  };

  //Expression Selector
  handleExpressionSelectorSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedExpressionSelector: event.target.value });
  };
  //Expression Selector ExpressionSelectorPath Save
  handlePathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      pathValue: event.target.value
    });
  };
  //Expression Selector - Namespaces
  handlePrefixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ prefix: event.target.value });
  };
  handleUriChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ uri: event.target.value });
  };
  //Expression Selector - Namespaces - Add Button
  handleAddClick = () => {
    const { data, prefix, uri } = this.state;
    if (prefix === '' || uri === '') {
      return;
    }
    const newData = `${data}xmlns:${prefix}="${uri}"\n`;
    this.setState({ data: newData, prefix: '', uri: '' });
  };
  //Expression Selector - Namespaces - Remove Button
  handleRemoveClick = () => {
    const { data } = this.state;
    const lines = data.split('\n');
    const selectedLineIndex = lines.findIndex((line) => line === document.getSelection()?.toString());

    if (selectedLineIndex !== -1) {
        lines.splice(selectedLineIndex, 1);
        const newData = lines.join('\n');
        this.setState({ data: newData });
    }
  };
  //Expression Selector - Namespaces - Edit Button
  handleEditClick = () => {
    const { data, prefix: newPrefix, uri: newUri } = this.state;
    const lines = data.split('\n');
    const selectedLineIndex = lines.findIndex((line) => line === document.getSelection()?.toString());
    if (selectedLineIndex !== -1) {
      const selectedLine = lines[selectedLineIndex];
      const prefixIndex = selectedLine.indexOf(':');
      if (prefixIndex !== -1) {
        const oldPrefix = selectedLine.slice(6, prefixIndex);
        const oldUri = selectedLine.slice(prefixIndex + 2, -1);
        let newLine = null;
        const prefixRegex = /^[a-zA-Z_][\w-]*$/;
        const uriRegex = /^[^\s"'<>&]+$/;
        if (prefixRegex.test(newPrefix.trim()) && uriRegex.test(newUri.trim())) {
          if (newPrefix.trim() !== '' && newUri.trim() !== '') {
            newLine = `xmlns:${newPrefix}="${newUri}"`;
          } else if (newPrefix.trim() !== '') {
            newLine = `xmlns:${newPrefix}="${oldUri}"`;
          } else if (newUri.trim() !== '') {
            newLine = `xmlns:${oldPrefix}="${newUri}"`;
          }
        }
        if (newLine !== null) {
          const newData = data.replace(selectedLine, newLine);
          // update the state to reflect the changes
          this.setState({ data: newData });
        }
      }
    }
  };
  //Expression Selector - Evaluate Xpath - Enter XML Content  
  handleXMLEntContentChange = (value: string) => {
    this.setState({ xmlContent: value });
  };
  //Expression Selector - Evaluate Xpath - Load XML File
  handleXMLFileLoad = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type.includes('xml')) { // check if file is of xml type
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.setState({ xmlContent: e.target.result });
      };
      reader.readAsText(file);
    } else {
      alert('Please select only XML files. Check the file type and try again.');
    }
  };
  //Expression Selector - Evaluate Xpath - Browse File Button
  handleBrowseFileClick = () => {
    const allowedFileTypes = ['text/xml', 'application/xml']; // allowed file types
    if (this.fileInput.current) {
      this.fileInput.current.accept = allowedFileTypes.join(','); // set allowed file types for input element
      this.fileInput.current.click();
    }
  };
  //Expression Selector - Evaluate Xpath - Evaluate Button
  handleEvaluateClick = () => {
    // When user clicks on Evaluate button, XML data will be evaluated and the result will be shown in the text area
  };
  //Expression Selector - Save the data
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value
    });
  };
  //Expression Selector - Model OK and Cancel Button
  componentDidMount() {
    this.setState({ isDataSaved: false });
  };
  //Expression Selector - Model OK Button
  handleOKClick = () => {
    // Access the input value from the state
    this.setState({ isDataSaved: false });
    // Perform the desired action with the input data (e.g., send to server, update application state, etc.)
    // ...
    // Hide the modal
    this.setState({showParameterNameModal: false});
  };
  //Expression Selector - Model Cancel Button
  handleCancelClick = () => {
    if (this.state.isDataSaved) {
      // if data has already been saved, just hide the modal and clear the input fields
      this.setState({ showParameterNameModal: false, inputValue: "", pathValue: "", selectedExpressionSelector: "XML", data: "", prefix: "", uri: "", selectedInput: "", xmlContent: null });
    } else {
      // if data has not been saved, show a confirmation message before clearing the input fields
      if (window.confirm("Are you sure you want to discard the changes?")) {
        this.setState({ showParameterNameModal: false, inputValue: "", pathValue: "", selectedExpressionSelector: "XML", data: "", prefix: "", uri: "", selectedInput: "", xmlContent: null });
      }
    }
  };
  
  render() {
    const { selectedExpressionSelector, showParameterNameModal, selectedInput, xmlContent, namespaces } = this.state;
    return (
      <>
        <Modal.Header>
          <Modal.Title className="text-primary">Properties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-4">
            <Col>
              <Modal.Title className="text-secondary">Properties</Modal.Title>
              <Form>
                <Form.Group>
                  <Form.Label className="ParameterName">Parameter Name</Form.Label>
                  <Form.Control as="textarea" style={{ minHeight: '100px' }} placeholder=" " onClick={this.handleParameterNameShowModal}/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal show={showParameterNameModal} onHide={this.handleParameterNameHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Expression Selector</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-4">
                <Form>
                  <Form.Group>
                    <Form.Label className="ExpressionSelector"></Form.Label>
                    <div className="ExpressionSelector">
                      <Form.Select value={selectedExpressionSelector} onChange={this.handleExpressionSelectorSelectChange}>
                        <option value="XML">XML</option>
                        <option value="JSON">JSON</option>
                        <option value="Expression">Expression</option>
                      </Form.Select>
                      <Form.Label className="ExpressionSelectorPath"></Form.Label>
                      <Form.Control type="text" value={this.state.pathValue} onChange={this.handlePathChange}/>
                    </div>
                    {selectedExpressionSelector === "XML" && (
                      <>
                        <hr />
                        <p><b>Namespaces</b></p>
                        <div className="form-container">
                          <div className="form-row">
                            <Form.Label className="Prefix">Prefix: </Form.Label>
                            <div className="col">
                              <Form.Control type="text" placeholder="Prefix" value={this.state.prefix} onChange={this.handlePrefixChange} />
                            </div>
                            <Form.Label className="URI">URI: </Form.Label>
                            <div className="col">
                              <Form.Control type="text" placeholder="URI" value={this.state.uri} onChange={this.handleUriChange} />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-auto button-container">
                              <Button className="orange-button" onClick={this.handleAddClick}>Add</Button> 
                              <Button className="orange-button" onClick={this.handleEditClick}>Edit</Button>
                              <Button className="orange-button" onClick={this.handleRemoveClick}>Remove</Button>
                            </div>
                          </div>
                        </div>
                        <div className="namespacesTextarea">
                          <Form.Label className="NamespacesData"></Form.Label>
                          <Form.Control as="textarea" rows={3} value={this.state.data} readOnly />
                        </div>
                        <hr /><p><b>Evaluate Xpath</b></p>
                        <h3><center><u>Input</u></center></h3>
                        <div className="radio-buttons-container">
                          <Form.Check inline type="radio" name="inputType" className="EnterXML" label="Enter XML" checked={selectedInput === 'EnterXML'} onChange={() => this.setState({ selectedInput: 'EnterXML', xmlContent: null })}/>
                          <Form.Check inline type="radio" name="inputType" className="LoadXMLFile" label="Load XML File" checked={selectedInput === 'LoadXMLFile'} onChange={() => this.setState({ selectedInput: 'LoadXMLFile', xmlContent: null})}/>
                        </div>
                        <br/>
                        {selectedInput === 'EnterXML' && (
                          <>
                            <AceEditor mode="xml" theme="monokai" name="xml-ent-content" placeholder="Paste your XML content here..." value={xmlContent} editorProps={{ $blockScrolling: true }} onChange={this.handleXMLEntContentChange} width="100%" height="300px" fontSize={14} setOptions={{useWorker: false, showLineNumbers: true, tabSize: 2,}}/>
                            <div className="col-auto source-visual-button-container">
                              <Button className="source-visual-button" onClick={this.handleAddClick}>Source</Button> 
                              <Button className="source-visual-button" onClick={this.handleEditClick}>Visual</Button>
                            </div>
                          </>
                         )}
                        {selectedInput === 'LoadXMLFile' && (
                          <>
                            <Form.Control id="xmlLoadFile" type="file" ref={this.fileInput} style={{ display: 'none' }} onChange={this.handleXMLFileLoad} accept=".xml"/>
                            <div className="browseFile-button-container">
                              <Button className="browseFile-button" onClick={this.handleBrowseFileClick}>Browse File</Button>
                            </div>
                            <br/>
                            {xmlContent && (
                              <>
                                <AceEditor mode="xml" theme="github" name="xml-load-content" value={xmlContent} editorProps={{ $blockScrolling: true }} readOnly={true} width="100%" height="300px" fontSize={14} setOptions={{useWorker: false, showLineNumbers: true, tabSize: 2,}}/>
                                <div className="col-auto source-visual-button-container">
                                  <Button className="source-visual-button" onClick={this.handleAddClick}>Source</Button> 
                                  <Button className="source-visual-button" onClick={this.handleEditClick}>Visual</Button>
                                </div>
                              </>
                            )}
                          </>
                        )}
                    <h3><center><u>Output</u></center></h3> 
                    <Form.Label className="outputBox"></Form.Label>
                    <Form.Control as="textarea" className="convertedToOutputBox" /> 
                    <br/>
                    <div className="browseFile-button-container">
                      <Button className="browseFile-button" onClick={this.handleEvaluateClick}>Evaluate</Button>
                    </div>  
                  </>
                    )}
                    {selectedExpressionSelector === "JSON" && (
                    <>
                    </>
                    )}
                    {selectedExpressionSelector === "Expression" && (
                      <>
                        <hr />
                            <p>In addition to standard XPath functions, the ESB profile of WSO2 Enterprise Integrator supports the following custom functions for working with XPath expressions:</p>
                            <ul>
                              <li>get-property() function - Allows any XPath expression used in a configuration to look up information from the current message context.</li>
                              <li>vault-lookup() function - Can be used to securely store and to logically reference the password mapping.</li>
                            </ul>
                            <p>There is a set of predefined XPath variables that you can directly use to write XPaths in the Synapse configuration, instead of using the synapse:get-property() function. These XPath variables get properties of various scopes as follows: </p> 
                            <table>
                              <thead>
                                <tr>
                                  <th>Variable</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>$body</td>
                                  <td>The SOAP 1.1 or 1.2 body element. For example, the expression <b>$body//getQuote</b> refers to the first <b>getQuote</b> element in a SOAP body, regardless of whether the message is SOAP-11 or SOAP-12</td>
                                </tr>
                                <tr>
                                  <td>$header</td>
                                  <td>The SOAP 1.1 or 1.2 header element. For example, the expression <b>$header/wsa:To</b> refers to the addressing <b>To</b> header regardless of whether this message is SOAP-11 or SOAP-12 </td>
                                </tr>
                                <tr>
                                  <td>$axis2</td>
                                  <td>Prefix for Axis2 MessageContext properties. This is used to get the property value at the axis2 scope. For example, to get the value of Axis2 message context property with name REST_URL_POSTFIX, use the XPath expression <b>$axis2:REST_URL_POSTFIX</b></td>
                                </tr>
                                <tr>
                                  <td>$ctx</td>
                                  <td>Prefix for Synapse MessageContext properties and gets a property at the default scope. For example, to get the value of Synapse message context property with name ERROR_MESSAGE, use the XPath expression <b>$ctx:ERROR_MESSAGE</b></td>
                                </tr>
                                <tr>
                                  <td>$trp</td>
                                  <td>Prefix used to get the transport headers. For example, to get the transport header named Content-Type of the current message, use the XPath expression <b>$trp:Content-Type</b>. HTTP transport headers are not case sensitive. Therefore, $trp:Content-Type and $trp:CONTENT-TYPE are regarded as the same</td>
                                </tr>
                                <tr>
                                  <td>$url</td>
                                  <td>The prefix used to get the URI element of a request URL</td>
                                </tr>
                                <tr>
                                  <td>$func</td>
                                  <td>The prefix used to refer to a particular parameter value passed externally by an invoker such as the Call Template Mediator</td>
                                </tr>
                                <tr>
                                  <td>$env</td>
                                  <td> Prefix used to get a SOAP 1.1 or 1.2 envelope level element. For example, to get the body element from the SOAP envelope, use the  expression <b>$env/*[local-name()='Body']</b></td>
                                </tr>
                              </tbody>
                            </table>
                      </>
                    )}
                  </Form.Group>
                </Form>
            </Row>
          </Modal.Body>
          <Modal.Footer>
          <div className="footer-button-container">
            <Button id="primary-button" onClick={this.handleOKClick}>OK</Button>
            <Button id="secondary-button" onClick={this.handleCancelClick}>Cancel</Button>      
          </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}    
