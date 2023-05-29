import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedScriptKeyType: string;
};

export default class XQueryMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedScriptKeyType: "Static",
    };
}
handleScriptKeyTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedScriptKeyType: event.target.value });
};
    
    
  render() {
    const { selectedScriptKeyType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>XQuery Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="ScriptKeyType">Script Key Type</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Specifies whether the key which represents the XQuery transformation should be a static key or a dynamic key</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Select value={selectedScriptKeyType} onChange={this.handleScriptKeyTypeSelectChange}>
                                <option value="Static">Static</option>
                                <option value="Dynamic">Dynamic</option>
                            </Form.Select>
                            <Form.Label className="TargetXpath">Target Xpath</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Specifies the node of the message to which the XQuery transformation should be applied. The node is evaluated via an XPath expression. If no value is specified for this parameter, the XQuery transformation is applied to the first child of the SOAP body</Tooltip>}>
                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                    </span>
                                </OverlayTrigger>
                            {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                            <Form.Control type="text" readOnly/>
                            {selectedScriptKeyType === "Static" && (
                                <>
                                    <Form.Label className="StScriptKey">Static Script Key</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The key that represents XQuery transformation</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                    <Form.Control type="text" placeholder='eg: Static Script Key'/>
                                </>
                            )}
                            {selectedScriptKeyType === "Dynamic" && (
                                <>
                                    <Form.Label className="DyScriptKey">Dynamic Script Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource Key Model Model appears.*/}
                                    <Form.Control type="text" readOnly/>
                                </>
                            )}
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Variables
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="Variables">Variables</Form.Label>
                                        {/* When a user clicks this textbox, the XQueryVariable Model appears.*/}
                                        <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>                                      
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