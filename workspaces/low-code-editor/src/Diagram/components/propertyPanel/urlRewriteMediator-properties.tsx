import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {};

export default class URLRewriteMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}; 
    }
    
  render() {
    const {} = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>URL Rewrite Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="URLRewriteAction">URL Rewrite Action</Form.Label>
                            {/* When a user clicks this textbox, the URLRewriteRule Model appears.*/}
                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    In-Out Properties
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="InProperty">In Property</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The rewrite rules are applied to the value of the property entered in this parameter to generate the result URL. If no property is entered,the rewrite rules will be applied to the To header of the message</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Control type="text" placeholder="eg: In Property"/>
                                        <Form.Label className="OutProperty">In Property</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">This parameter is used to enter the property to which the transformations done via the rewrite rules should be applied. If no property is entered, the transformations will be applied to the to header of the message</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Control type="text" placeholder="eg: Out Property"/>
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