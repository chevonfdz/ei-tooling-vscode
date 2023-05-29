import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {};

export default class EnqueueMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
}

  render() {
    const { } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Enqueue Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='Executor'>Executor</Form.Label>
                            <Form.Control type="text" placeholder='eg: Executor'/>
                            <Form.Label className='Priority'>Priority</Form.Label>
                            <Form.Control type="text" placeholder='0'/>
                            <Form.Label className='SequenceKey'>Sequence Key</Form.Label>
                            {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                            <Form.Control type="text" readOnly/>
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