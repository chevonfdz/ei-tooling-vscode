import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedInputType: string;
    selectedOutputType: string;
};

export default class DataMapperMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedInputType: "XML",
            selectedOutputType: "XML",
    };
}
handleInputTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedInputType: event.target.value });
};
handleOutputTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOutputType: event.target.value });
};  
    
  render() {
    const { selectedInputType, selectedOutputType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>DataMapper Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="ConLocalPath">Configuration Local Path</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Double click on datamapper mediator diagram to load configurations dialog</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                            <Form.Control type="text" readOnly/>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Input Type
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="InputType<">Input Type</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Expected input message type &#40;XML/JSON/CSV&#41;</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Select value={selectedInputType} onChange={this.handleInputTypeSelectChange}>
                                            <option value="XML">XML</option>
                                            <option value="CSV">CSV</option>
                                            <option value="JSON">JSON</option>
                                        </Form.Select>
                                        <Form.Label className="InSchemaLocalPath">InputSchema Local Path</Form.Label>
                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                        <Form.Control type="text" readOnly/>                                    
                                    </Form.Group>
                                </Form> 
                            </Row>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Output Type
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="OutputType<">Output Type</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Expected output message type &#40;XML/JSON/CSV&#41;</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Select value={selectedOutputType} onChange={this.handleOutputTypeSelectChange}>
                                            <option value="XML">XML</option>
                                            <option value="CSV">CSV</option>
                                            <option value="JSON">JSON</option>
                                        </Form.Select>
                                        <Form.Label className="OutSchemaLocalPath">OutputSchema Local Path</Form.Label>
                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                        <Form.Control type="text" readOnly/>                                    
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