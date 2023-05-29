import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {};

export default class NTLMMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
} 
    
  render() {
    const { } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>NTLM Mediator Property</Modal.Title>
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
                            <Form.Label className="UserName">User Name</Form.Label>
                                <div className="row">
                                    <div className="col-auto">
                                        <Form.Control type="text" value="Ex" readOnly className="small-text" /> {/* When a user clicks this EX textbox, the Expression Selector Model appears*/}
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" placeholder="eg: Username" className="large-space" />
                                    </div>
                                </div> 
                            <Form.Label className="Password">Password</Form.Label>
                                <div className="row">
                                    <div className="col-auto">
                                        <Form.Control type="text" value="Ex" readOnly className="small-text" /> {/* When a user clicks this EX textbox, the Expression Selector Model appears*/}
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" placeholder="eg: Password" className="large-space" />
                                    </div>
                                </div>
                            <Form.Label className="Host">Host</Form.Label>
                                <div className="row">
                                    <div className="col-auto">
                                        <Form.Control type="text" value="Ex" readOnly className="small-text" /> {/* When a user clicks this EX textbox, the Expression Selector Model appears*/}
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" placeholder="eg: Host" className="large-space" />
                                    </div>
                                </div>
                            <Form.Label className="Domain">Domain</Form.Label>
                                <div className="row">
                                    <div className="col-auto">
                                        <Form.Control type="text" value="Ex" readOnly className="small-text" /> {/* When a user clicks this EX textbox, the Expression Selector Model appears*/}
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" placeholder="eg: Domain" className="large-space" />
                                    </div>
                                </div>
                            <Form.Label className="NtlmVersion">Ntlm Version</Form.Label>
                                <div className="row">
                                    <div className="col-auto">
                                        <Form.Control type="text" value="Ex" readOnly className="small-text" /> {/* When a user clicks this EX textbox, the Expression Selector Model appears*/}
                                    </div>
                                    <div className="col">
                                        <Form.Control type="text" placeholder="eg: Ntlm Version" className="large-space" />
                                    </div>
                                </div>
                        </Form.Group>
                    </Form>
                </Row>          
            </Modal.Body>
        </> 
    )
  }
}