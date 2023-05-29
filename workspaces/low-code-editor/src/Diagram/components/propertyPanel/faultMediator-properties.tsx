import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup } from 'react-bootstrap';

type Props = {};
type State = {
    selectedSOAPVersion: string;
    selectedSOAP11: string;
    selectedCode: string;
    selectedDetailType: string;
    selectedReasonType: string;
};

export default class FaultMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedSOAPVersion: 'soap11',
            selectedSOAP11: 'VersionMismatch',
            selectedCode: 'VersionMismatch',
            selectedDetailType: 'VALUE',
            selectedReasonType: 'VALUE',
        }; 
    }
    handleSOAPVersionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedSOAPVersion: event.target.value });
    };
    handleSOAP11SelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedSOAP11: event.target.value });
    };
    handleCodeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedCode: event.target.value });
    };
    handleDetailTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedDetailType: event.target.value });
    };
    handleReasonTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedReasonType: event.target.value });
    };
        render() {
            const { selectedSOAPVersion, selectedSOAP11, selectedCode, selectedDetailType, selectedReasonType } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Fault Mediator Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <br />
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="SOAPVersion">SOAP Version</Form.Label>
                                    <Form.Select value={selectedSOAPVersion} onChange={this.handleSOAPVersionSelectChange}>
                                        <option value="soap11">soap11</option>
                                        <option value="soap12">soap12</option>
                                        <option value="POX">POX</option>
                                    </Form.Select>
                                    {selectedSOAPVersion === "soap11" && (
                                        <>
                                            <Form.Label className="SOAP11">SOAP11</Form.Label>
                                            <Form.Select value={selectedSOAP11} onChange={this.handleSOAP11SelectChange}>
                                                <option value="VersionMismatch">VersionMismatch</option>
                                                <option value="MustUnderstand">MustUnderstand</option>
                                                <option value="Client">Client</option>
                                                <option value="Server">Server</option>
                                            </Form.Select>
                                            <Form.Label className="Actor">Actor</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The element of the SOAP fault message which is used to capture the party which caused the fault</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Actor'/>
                                        </>
                                    )}
                                    {selectedSOAPVersion === "soap12" && (
                                        <>
                                            <Form.Label className="Code">Code</Form.Label>
                                            <Form.Select value={selectedCode} onChange={this.handleCodeSelectChange}>
                                                <option value="VersionMismatch">VersionMismatch</option>
                                                <option value="MustUnderstand">MustUnderstand</option>
                                                <option value="DataEncodingUnknown">DataEncodingUnknown</option>
                                                <option value="Sender">Sender</option>
                                                <option value="Receiver">Receiver</option>
                                            </Form.Select>
                                            <Form.Label className="Role">Role</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The SOAP role name</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Role'/>
                                            <Form.Label className="Node">Node</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The SOAP node name</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Node'/>
                                        </>
                                    )}
                                    <Form.Check type="checkbox" className="SerializeResponse" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Serialize Response</span>}/>
                                    <br/>
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Detail
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="DetailType">Type</Form.Label>
                                                <Form.Select value={selectedDetailType} onChange={this.handleDetailTypeSelectChange}>
                                                    <option value="VALUE">VALUE</option>
                                                    <option value="EXPRESSION">EXPRESSION</option>
                                                </Form.Select>  
                                                {selectedDetailType === "VALUE" && (
                                                    <>
                                                        <Form.Label className="DetailValue">Value</Form.Label>
                                                        <Form.Control type="text" placeholder='eg: Value'/>
                                                    </>
                                                )}
                                                {selectedDetailType === "EXPRESSION" && (
                                                    <>
                                                        <Form.Label className="DetailExpression">Expression</Form.Label>
                                                        {/*When a user clicks this textbox, the Expression Selector Model appears*/}
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}
                                            </Form.Group>
                                        </Form>
                                    </Row>
                                    <br />
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Reason
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="ReasonType">Type</Form.Label>
                                                <Form.Select value={selectedReasonType} onChange={this.handleReasonTypeSelectChange}>
                                                    <option value="VALUE">VALUE</option>
                                                    <option value="EXPRESSION">EXPRESSION</option>
                                                </Form.Select>  
                                                {selectedReasonType === "VALUE" && (
                                                    <>
                                                        <Form.Label className="ReasonValue">Value</Form.Label>
                                                        <Form.Control type="text" placeholder='eg: Value'/>
                                                    </>
                                                )}
                                                {selectedReasonType === "EXPRESSION" && (
                                                    <>
                                                        <Form.Label className="ReasonExpression">Expression</Form.Label>
                                                        {/*When a user clicks this textbox, the Expression Selector Model appears*/}
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