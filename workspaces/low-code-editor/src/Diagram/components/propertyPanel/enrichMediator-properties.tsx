import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedSourceType: string;
    selectedInlineType: string;
    selectedTargetAction: string;
    selectedTargetType: string;
};

export default class EnrichMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedSourceType: "property",
            selectedInlineType: "InlineXMLJSON",
            selectedTargetAction: "replace",
            selectedTargetType: "custom",
        }; 
    }
    handleSourceTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedSourceType: event.target.value });
    };
    handleInlineTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedInlineType: event.target.value });
    };
    handleTargetActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedTargetAction: event.target.value });
    };
    handleTargetTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedTargetType: event.target.value });
    };
    
  render() {
    const { selectedSourceType, selectedInlineType, selectedTargetAction, selectedTargetType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Enrich Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Source
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Group style={{ textAlign: "left" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Form.Check type="checkbox" className="CloneSource" label={<span style={{ marginLeft: "10px" }}>Clone Source</span>} defaultChecked />
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">If checked, the message can be cloned or used as a reference during enriching</Tooltip>} >
                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                    </span>
                                    </OverlayTrigger>
                                </div>
                                <br/>
                            </Form.Group>
                            <Form.Label className="SourceType">Source Type</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The type that the mediator uses from the original message to enrich the modified message that passes through the mediator</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Select value={selectedSourceType} onChange={this.handleSourceTypeSelectChange}>
                                <option value="custom">custom</option>
                                <option value="body">body</option>
                                <option value="envelope">envelope</option>
                                <option value="property">property</option>
                                <option value="inline">inline</option>
                            </Form.Select>
                            {selectedSourceType === "custom" && (
                                <>
                                <Form.Label className="SourceXpath">Source XPath</Form.Label>
                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                <Form.Control type="text" readOnly/>
                                </>
                            )}
                            {selectedSourceType === "property" && (
                                <>
                                <Form.Label className="SourceProperty">Source Property</Form.Label>
                                {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                <Form.Control type="text" placeholder="eg: Source Property"/>
                                </>
                            )}
                            {selectedSourceType === "inline" && (
                                <>
                                <Form.Label className="InlineType">Inline Type</Form.Label>
                                <Form.Select value={selectedInlineType} onChange={this.handleInlineTypeSelectChange}>
                                    <option value="InlineXMLJSON">Inline XML/JSON</option>
                                    <option value="RegistryKey">RegistryKey</option>
                                </Form.Select>  
                                {selectedInlineType === "InlineXMLJSON" && (
                                    <>
                                        <Form.Label className="SourceXML">Source XML</Form.Label>
                                        <Form.Control as="textarea" style={{ minHeight: '200px' }}>&lt;inline/&gt;</Form.Control>
                                    </>
                                )} 
                                {selectedInlineType === "RegistryKey" && (
                                    <>
                                        <Form.Label className="InRegistryKey">Inline Registry Key</Form.Label> 
                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                        <Form.Control type="text" readOnly/> 
                                    </>
                                )}     
                               </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>          
                <br/>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Target
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="TargetAction">Target Action</Form.Label>
                            <OverlayTrigger placement="right"
                                        overlay={
                                            <Tooltip id="help-tooltip">
                                            By specifying the action type, the relevant action can be applied to outgoing messages.  
                                            <br />
                                            <br />
                                            Replace:
                                            <br />
                                            Will be used if a specific value for Action is not given. This replaces the XML message based on the target type specified on the target configuration
                                            <br />
                                            <br />
                                            Child: 
                                            <br />
                                            Adding as a child of the specified target type
                                            <br />
                                            <br />
                                            Sibling: 
                                            <br />
                                            Adding as a sibling of the specified target type
                                            </Tooltip>
                                        }
                                        >
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                            <Form.Select value={selectedTargetAction} onChange={this.handleTargetActionSelectChange}>
                                <option value="replace">replace</option>
                                <option value="child">child</option>
                                <option value="sibling">sibling</option>
                                <option value="remove">remove</option>
                            </Form.Select>
                            <Form.Label className="TargetType">Target Type</Form.Label>
                            <Form.Select value={selectedTargetType} onChange={this.handleTargetTypeSelectChange}>
                                <option value="custom">custom</option>
                                <option value="body">body</option>
                                <option value="property">property</option>
                                <option value="envelope">envelope</option>
                                <option value="key">key</option>
                            </Form.Select>
                            {(selectedTargetType === "custom" || selectedTargetType === "key") && (
                                <>
                                    <Form.Label className="TargetXorJPath">Target XPath / JSONPath</Form.Label>
                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                    <Form.Control type="text" readOnly/> 
                                </>
                            )}
                            {selectedTargetType === "property" && (
                                <>
                                    <Form.Label className="TargetProperty">Target Property</Form.Label>
                                    <Form.Control type="text" placeholder='target_property'/>
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>
                <br/>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Misc
                    </Modal.Title>
                    <Form>
                        <Form.Group>
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