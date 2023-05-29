import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
};

export default class ConditionalRouterProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}; 
    }
    
        render() {
            const { } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>ConditionalRouter Mediator Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Group style={{ textAlign: "left" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <Form.Check
                                            type="checkbox"
                                            className="ContAftRoute"
                                            label={<span style={{ marginLeft: "10px" }}>Continue After Route</span>}
                                            />
                                            <OverlayTrigger
                                            placement="right"
                                            overlay={<Tooltip id="help-tooltip">If this is selected, mediation continues to execute (any other mediators specified) after the conditional router mediator</Tooltip>}
                                            >
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                            </OverlayTrigger>
                                        </div>
                                        <br/>
                                    </Form.Group>
                                    <Form.Label className='Conditional Route Branches'>Conditional Route Branches</Form.Label>
                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                    <Form.Control as="textarea" readOnly/> 
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