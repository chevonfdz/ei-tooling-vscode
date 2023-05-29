import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {};

export default class BAMMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
} 
    
  render() {
    const { } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>BAM Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="ServerProfileName">Server Profile Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: Server Profile Name"/>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Stream
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="StreamName">Stream Name</Form.Label>
                                        <Form.Control type="text" placeholder="eg: Stream Name"/>
                                        <Form.Label className="StreamVersion">Stream Version</Form.Label>
                                        <Form.Control type="text" placeholder="eg: Stream Version"/>                              
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