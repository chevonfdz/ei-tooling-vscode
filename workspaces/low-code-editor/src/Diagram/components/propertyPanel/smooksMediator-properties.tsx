import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedInputType: string;
    selectedOutputType: string;
    selectedOutputMethod: string;
    selectedOutputAction: string;
};
export default class SmooksMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedInputType: "xml",
            selectedOutputType: "xml",
            selectedOutputMethod: "Default",
            selectedOutputAction: "Add",    
        }; 
    }
    handleInputTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedInputType: event.target.value });
    };
    handleOutputTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedOutputType: event.target.value });
    };
    handleOutputMethodSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedOutputMethod: event.target.value });
    };
    handleOutputActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedOutputAction: event.target.value });
    };
    
  render() {
    const { selectedInputType, selectedOutputType, selectedOutputMethod, selectedOutputAction  } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Smooks Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Input
                    </Modal.Title>
                    <Form>
                        <Form.Group> 
                            <Form.Label className="InputType">Input Type</Form.Label>
                            <Form.Select value={selectedInputType} onChange={this.handleInputTypeSelectChange}>
                                <option value="xml">xml</option>
                                <option value="text">text</option>
                            </Form.Select>  
                            <Form.Label className="InputExpression">Input Expression</Form.Label>   
                            <Form.Control type="text" placeholder='eg: Input Expression'/>                                  
                        </Form.Group>
                    </Form> 
                </Row>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Key
                    </Modal.Title>
                    <Form>
                        <Form.Group>   
                            <Form.Label className="ConfigurationKey">Configuration Key</Form.Label>  
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The key to access the Smooks configuration. The Smooks configuration should be saved in the Registry as a local entry before it can be used here</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger> 
                            {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                            <Form.Control type="text" readOnly/>                                        
                        </Form.Group>
                    </Form> 
                </Row>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Output
                    </Modal.Title>
                    <Form>
                        <Form.Group> 
                            <Form.Label className="OutputType">Output Type</Form.Label>
                            <Form.Select value={selectedOutputType} onChange={this.handleOutputTypeSelectChange}>
                                <option value="xml">xml</option>
                                <option value="text">text</option>
                                <option value="java">java</option>
                            </Form.Select>  
                            <Form.Label className="OutputMethod">Output Method</Form.Label>
                            <Form.Select value={selectedOutputMethod} onChange={this.handleOutputMethodSelectChange}>   
                                <option value="Default">Default</option>
                                <option value="Property">Property</option>
                                <option value="Expression">Expression</option>
                            </Form.Select> 
                            {selectedOutputMethod === "Property" && (
                                <>
                                    <Form.Label className="OutputProperty">Output Property</Form.Label>
                                    <Form.Control type="text" placeholder='eg: Output Property'/>
                                </>
                            )} 
                            {selectedOutputMethod === "Expression" && (
                                <>
                                    <Form.Label className="OutputAction">Output Action</Form.Label>
                                    <Form.Select value={selectedOutputAction} onChange={this.handleOutputActionSelectChange}>
                                        <option value="Add">Add</option>
                                        <option value="Replace">Replace</option>
                                        <option value="Sibling">Sibling</option>
                                    </Form.Select>
                                    <Form.Label className="OutputExpression">Output Expression</Form.Label>
                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                    <Form.Control type="text" readOnly/>
                                </>
                            )}                                      
                        </Form.Group>
                    </Form> 
                </Row>
                <br />
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