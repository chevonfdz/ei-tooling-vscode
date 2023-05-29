import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {};

export default class PublishEventMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
} 
    
  render() {
    const { } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Publish Event Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="StreamName">Stream Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: Stream Name"/>
                            <Form.Label className="StreamVersion">Stream Version</Form.Label>
                            <Form.Control type="text" placeholder="eg: Stream Version"/> 
                            <Form.Label className="EventSink">Event Sink</Form.Label>
                            <Form.Control type="text" placeholder="eg: Event Sink"/>
                            <br />
                            <Form.Check type="checkbox" className="Async" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }} >Async</span>} defaultChecked/>
                            <Form.Label className="AsyncTimeout">Async Timeout</Form.Label>
                            <Form.Control type="text" placeholder="eg: Async Timeout"/>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Meta Attributes
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="MetaAttributes">Meta Attributes</Form.Label>
                                        {/* When a user clicks this EX textbox, the PublishEventMediatorAttribute Model appears*/}
                                        <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly/>                          
                                    </Form.Group>
                                </Form> 
                            </Row>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Correlation Attributes
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="CorrelationAttributes">Correlation Attributes</Form.Label>
                                        {/* When a user clicks this EX textbox, the PublishEventMediatorAttribute Model appears*/}
                                        <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly/>                          
                                    </Form.Group>
                                </Form> 
                            </Row>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Payload Attributes
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="PayloadAttributes">Payload Attributes</Form.Label>
                                        {/* When a user clicks this EX textbox, the PublishEventMediatorAttribute Model appears*/}
                                        <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly/>                          
                                    </Form.Group>
                                </Form> 
                            </Row>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Arbitrary Attributes
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="ArbitraryAttributes">Arbitrary Attributes</Form.Label>
                                        {/* When a user clicks this EX textbox, the PublishEventMediatorAttribute Model appears*/}
                                        <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly/>                          
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