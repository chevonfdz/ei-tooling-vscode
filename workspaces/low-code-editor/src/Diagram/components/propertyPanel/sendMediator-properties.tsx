import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedReSeqType: string;
};

export default class SendMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedReSeqType: "Default",
        }; 
    }
    handleReSeqTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedReSeqType: event.target.value });
    };
        render() {
            const { selectedReSeqType } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Send Mediator Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Group style={{ textAlign: "left" }}>
                                        <div style={{ marginBottom: "10px" }}>
                                            <Form.Check
                                            type="checkbox"
                                            className="SkipSerialization"
                                            label={<span style={{ marginLeft: "10px" }}>Skip Serialization</span>}
                                            />
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <Form.Check
                                            type="checkbox"
                                            className="BuildMessage"
                                            label={<span style={{ marginLeft: "10px" }}>Build Message Before Sending</span>}
                                            />
                                            <OverlayTrigger
                                            placement="right"
                                            overlay={<Tooltip id="help-tooltip">If this is selected, the full message XML is built in the memory before the message is sent</Tooltip>}
                                            >
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                            </OverlayTrigger>
                                        </div>
                                    </Form.Group>
                                    <br/>
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>Receiving Sequence</Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="ReSeqType">Receiving Sequence Type</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The sequence to use for handling the response from the endpoint. If Default selected mediation sequence in the Out sequence will be used</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Select value={selectedReSeqType} onChange={this.handleReSeqTypeSelectChange}>
                                                    <option value="Default">Default</option>
                                                    <option value="Static">Static</option>
                                                    <option value="Dynamic">Dynamic</option>
                                                </Form.Select>
                                                {selectedReSeqType === "Static" && (
                                                    <>
                                                        <Form.Label className="StReSeq">Static Receiving Sequence</Form.Label>
                                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}
                                                {selectedReSeqType === "Dynamic" && (
                                                    <>
                                                        <Form.Label className="ReSeqExpr">Receiving Sequence Expression</Form.Label>
                                                        {/*When a user clicks this textbox, the Expression Selector appears.*/}
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}
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