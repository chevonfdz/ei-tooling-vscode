import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {};

export default class ValidateMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}; 
    }
    
        render() {
            const { } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Validate Mediator Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="Source">Source</Form.Label>
                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                    <Form.Control type="text" readOnly/>
                                    <Form.Check type="checkbox" className="EnableSchCach" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Enable Schema Caching</span>}/>
                                    <br/>
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Schemas
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="Schemas">Schemas</Form.Label>
                                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                <Form.Control as="textarea" readOnly/> 
                                            </Form.Group>
                                        </Form>
                                    </Row>
                                    <br/>
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Features
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="Features">Features</Form.Label>
                                                {/* When a user clicks this textbox, user can add features.*/}
                                                <Form.Control as="textarea" readOnly/> 
                                            </Form.Group>
                                        </Form>
                                    </Row>
                                    <br/>
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Resources
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="Resources">Resources</Form.Label>
                                                {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                <Form.Control as="textarea" readOnly/> 
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