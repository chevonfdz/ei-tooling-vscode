import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedCallbackHandler: string;
    selectedEntitlementClientType: string;
    selectedOnAcceptSeqType: string;
    selectedOnRejectSeqType: string;
    selectedObligationSeqType: string;
    selectedAdviceSeqType: string;
};

export default class EntitlementMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedCallbackHandler: "Anonymous",
            selectedEntitlementClientType: "SOAPBasicAuth",
            selectedOnAcceptSeqType: "ANONYMOUS",
            selectedOnRejectSeqType: "ANONYMOUS",
            selectedObligationSeqType: "ANONYMOUS",
            selectedAdviceSeqType: "ANONYMOUS",
        };
}
handleCallbackHandlerSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCallbackHandler: event.target.value });
};
handleEntitlementClientTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedEntitlementClientType: event.target.value });
};
handleOnAcceptSeqTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOnAcceptSeqType: event.target.value });
};
handleOnRejectSeqTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOnRejectSeqType: event.target.value });
};
handleObligationSeqTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedObligationSeqType: event.target.value });
};
handleAdviceSeqTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedAdviceSeqType: event.target.value });
};

  render() {
    const { selectedCallbackHandler, selectedEntitlementClientType, selectedOnAcceptSeqType, selectedOnRejectSeqType, selectedObligationSeqType, selectedAdviceSeqType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Entitlement Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>    
                            <Form.Label className="EntitlementServerURL">Entitlement Server URL</Form.Label>
                            <Form.Control type="text" placeholder="eg: Entitlement Server URL" />
                            <Form.Label className="Username">Username</Form.Label>
                            <Form.Control type="text" placeholder="eg: Username" />
                            <Form.Label className="Password">Password</Form.Label>
                            <Form.Control type="text" placeholder="eg: Password" />
                            <Form.Label className="CallbackHandler">Callback handler</Form.Label>
                            <Form.Select value={selectedCallbackHandler} onChange={this.handleCallbackHandlerSelectChange}>
                                <option value="UT">UT</option>
                                <option value="X509">X509</option>
                                <option value="SAML">SAML</option>
                                <option value="Kerberos">Kerberos</option>
                                <option value="Custom">Custom</option>
                            </Form.Select>
                            {selectedCallbackHandler === "Custom" && (
                                <>
                                    <Form.Label className="CallbackClassName">Callback Class Name</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Callback Class Name" />
                                </>
                            )}
                            <Form.Label className="EntitlementClientType">Entitlement Client Type</Form.Label>
                            <Form.Select value={selectedEntitlementClientType} onChange={this.handleEntitlementClientTypeSelectChange}>
                                <option value="SOAPBasicAuth">SOAP - Basic Auth &#40;WSO2 IS 4.0.0 or later&#41;</option>
                                <option value="Thrift">Thrift</option>
                                <option value="SOAPAuthentication">SOAP - Authentication Admin &#40;WSO2 IS 3.2.3 or earlier&#41;</option>
                                <option value="WSXACML">WSXACML</option>
                            </Form.Select>
                            {selectedEntitlementClientType === "Thrift" && (
                                <>
                                    <Form.Label className="ThriftHost">Thrift Host</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Thrift Host" />
                                    <Form.Label className="ThriftPort">Thrift Port</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Thrift Port" />
                                </>
                            )}
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
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        On Acceptance
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="OnAcceptSeqType">On Acceptance Sequence Type</Form.Label>
                            <Form.Select value={selectedOnAcceptSeqType} onChange={this.handleOnAcceptSeqTypeSelectChange}>
                                <option value="ANONYMOUS">ANONYMOUS</option>
                                <option value="REGISTRY_REFERENCE">Registry Reference</option>
                            </Form.Select>
                            {selectedOnAcceptSeqType === "REGISTRY_REFERENCE" && (
                                <>
                                    <Form.Label className="OnAcceptSeqKey">On Accept Sequence Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                    <Form.Control type="text" readOnly />
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>  
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        On Rejection
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="OnRejectSeqType">On Rejection Sequence Type</Form.Label>
                            <Form.Select value={selectedOnRejectSeqType} onChange={this.handleOnRejectSeqTypeSelectChange}>
                                <option value="ANONYMOUS">ANONYMOUS</option>
                                <option value="REGISTRY_REFERENCE">Registry Reference</option>
                            </Form.Select>
                            {selectedOnRejectSeqType === "REGISTRY_REFERENCE" && (
                                <>
                                    <Form.Label className="OnRejectSeqKey">On Reject Sequence Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                    <Form.Control type="text" readOnly />
                                </> 
                            )}
                        </Form.Group>
                    </Form>
                </Row>
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Obligations
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="ObligationSeqType">Obligation Sequence Type</Form.Label>
                            <Form.Select value={selectedObligationSeqType} onChange={this.handleObligationSeqTypeSelectChange}>
                                <option value="ANONYMOUS">ANONYMOUS</option>
                                <option value="REGISTRY_REFERENCE">Registry Reference</option>
                            </Form.Select>
                            {selectedObligationSeqType === "REGISTRY_REFERENCE" && (
                                <>
                                    <Form.Label className="ObligationSeqKey">Obligation Sequence Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                    <Form.Control type="text" readOnly />
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Advice
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="AdviceSeqType">Advice Sequence Type</Form.Label>
                            <Form.Select value={selectedAdviceSeqType} onChange={this.handleAdviceSeqTypeSelectChange}>
                                <option value="ANONYMOUS">ANONYMOUS</option>
                                <option value="REGISTRY_REFERENCE">Registry Reference</option>
                            </Form.Select>
                            {selectedAdviceSeqType === "REGISTRY_REFERENCE" && (
                                <>
                                    <Form.Label className="AdviceSeqKey">Advice Sequence Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                    <Form.Control type="text" readOnly />
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>
            </Modal.Body>
        </> 
    )
  }
}