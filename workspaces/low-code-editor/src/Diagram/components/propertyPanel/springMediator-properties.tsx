import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {};

export default class SpringMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}; 
    }
            render() {
            const { } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Spring Mediator Property</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <br />
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label ClassName="BeanName">Bean Name</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Is used for looking up a Spring bean from the spring Application Context. Therefore, a bean with the same name must be in the given spring configuration. In addition, bean must implement the Mediator interface</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Control type="text" placeholder="eg: Bean Name" />
                                    <Form.Label className="ConfigurationKey">Configuration Key</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The key to access the Smooks configuration should be saved in the Registry as a local entry before it can be used here</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                    <Form.Control as="textarea" readOnly />
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