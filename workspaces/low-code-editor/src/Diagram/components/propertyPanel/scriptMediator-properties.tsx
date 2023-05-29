import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedScriptLanguage: string;
    selectedScriptType: string;
    selectedKeyType: string;
};

export default class ScriptMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedScriptLanguage: "js",
            selectedScriptType: "INLINE",
            selectedKeyType: "STATIC_KEY",
        }; 
    }
    handleScriptLanguageSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedScriptLanguage: event.target.value });
    };
    handleScriptTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedScriptType: event.target.value });
    };
    handleKeyTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedKeyType: event.target.value });
    };

  render() {
    const { selectedScriptLanguage, selectedScriptType, selectedKeyType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Script Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='ScriptLanguage'>Script Language</Form.Label>
                            <OverlayTrigger placement="right"
                                overlay={
                                    <Tooltip id="help-tooltip">
                                    JavaScript: 
                                    <br />
                                    E4X support is enabled by default
                                    <br />
                                    <br />
                                    Ruby: 
                                    <br />
                                    Download the jruby-complete-1.3.0.wso22v1.jar file from the WSO2 P2 repository and copy it to the &lt;EI_HOME&gt;/dropins directory
                                    <br />
                                    <br />
                                    Groovy: 
                                    <br />
                                    Download the groovy-all-2.4.4.jar file and copy it to the &lt;EI_HOME&gt;/dropins directory
                                    </Tooltip>
                                }
                                >
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Select value={selectedScriptLanguage} onChange={this.handleScriptLanguageSelectChange}>
                                <option value="js">js</option>
                                <option value="rb">rb</option>
                                <option value="groovy">groovy</option>
                                <option value="nashornJs">nashornJs</option>
                            </Form.Select>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Script Type
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className='ScriptType'>Script Type</Form.Label>
                                        <Form.Select value={selectedScriptType} onChange={this.handleScriptTypeSelectChange}>
                                            <option value="INLINE">INLINE</option>
                                            <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>
                                        </Form.Select>
                                        {selectedScriptType === "INLINE" && (
                                            <>
                                            <Form.Label className="ScriptBody">Script Body</Form.Label>
                                            <Form.Control as="textarea" style={{ minHeight: '200px' }}>
                                                script_code;
                                            </Form.Control>
                                            </>
                                        )}
                                        {selectedScriptType === "REGISTRY_REFERENCE" && (
                                            <>
                                            <Form.Label className="FunctionName">Function Name</Form.Label>
                                            <Form.Control type="text" placeholder="Function Name"/>
                                            <Form.Label className='KeyType'>Key Type</Form.Label>
                                            <Form.Select value={selectedKeyType} onChange={this.handleKeyTypeSelectChange}>
                                                <option value="STATIC_KEY">STATIC_KEY</option>
                                                <option value="DYNAMIC_KEY">DYNAMIC_KEY</option>
                                            </Form.Select>
                                            <Form.Label className="ScriptKeys">Script Keys</Form.Label>
                                            {/* When a user clicks this textbox, the RegisrtyKeyProperty Model appears.*/}
                                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
                                            {selectedKeyType === "STATIC_KEY" && (
                                                <>
                                                    <Form.Label className="ScriptStaticKey">Script Static Keys</Form.Label>
                                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                    <Form.Control type="text" readOnly></Form.Control>
                                                </>
                                            )}
                                            {selectedKeyType === "DYNAMIC_KEY" && (
                                                <>
                                                    <Form.Label className="ScriptDynamicKey">Script Dynamic Keys</Form.Label>
                                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                    <Form.Control type="text" readOnly></Form.Control>
                                                </>
                                            )}
                                            </>
                                        )}
                                    </Form.Group>
                                </Form>
                            </Row>
                            <Form.Label className='mt-2 mb-0'>Description</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Default description</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Control as="textarea" placeholder='eg: None'/>
                        </Form.Group>
                    </Form>
                </Row>
            </Modal.Body>
        </> 
    )
  }
}