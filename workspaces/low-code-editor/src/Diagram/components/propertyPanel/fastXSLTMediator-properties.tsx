import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedFastXSLTSchemaType: string;
};

export default class FastXSLTMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedFastXSLTSchemaType: "Static",
    };
}
handleFastXSLTSchemaTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedFastXSLTSchemaType: event.target.value });
};
    
  render() {
    const { selectedFastXSLTSchemaType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>FastXSLT Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
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
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Schema Key
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                    <Form.Label className="FastXSLTSchemaType">Fast XSLT Schema Key Type</Form.Label>
                                        <Form.Select value={selectedFastXSLTSchemaType} onChange={this.handleFastXSLTSchemaTypeSelectChange}>
                                            <option value="Static">Static</option>
                                            <option value="Dynamic">Dynamic</option>
                                        </Form.Select>
                                        {selectedFastXSLTSchemaType === "Static" && (
                                            <>
                                                <Form.Label className="StXSLTSchemaKey">XSLT Static Schema Key</Form.Label>
                                                {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                <Form.Control type="text" readOnly/>
                                            </>
                                        )}
                                        {selectedFastXSLTSchemaType === "Dynamic" && (
                                            <>
                                                <Form.Label className="DyXSLTSchemaKey">XSLT Dynamic Schema Key</Form.Label>
                                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                <Form.Control type="text" readOnly/>
                                            </>
                                        )}                                   
                                    </Form.Group>
                                </Form> 
                            </Row>
                        </Form.Group>
                    </Form>
                </Row>          
            </Modal.Body>
        </> 
    )
  }
}