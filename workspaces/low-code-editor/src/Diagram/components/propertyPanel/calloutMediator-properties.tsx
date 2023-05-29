import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedEndpointType: string;
    selectedPayloadType: string;
    selectedResultType: string;
    selectedSecurityType: string;
    selectedPolicies: string;
};

export default class CalloutMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedEndpointType: "URL",
            selectedPayloadType: "XPATH",
            selectedResultType: "XPATH",
            selectedSecurityType: "FALSE",
            selectedPolicies: "FALSE",
    };
}
handleEndpointTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedEndpointType: event.target.value });
};
handlePayloadTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedPayloadType: event.target.value });
};
handleResultTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedResultType: event.target.value });
};
handleSecurityTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedSecurityType: event.target.value });
};
handlePoliciesSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedPolicies: event.target.value });
};
    
    
  render() {
    const { selectedEndpointType, selectedPayloadType, selectedResultType, selectedSecurityType, selectedPolicies } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Callout Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Service
                    </Modal.Title>
                    <Form>
                        <Form.Group>    
                            <Form.Label className="EndpointType">Endpoint Type</Form.Label>
                            <Form.Select value={selectedEndpointType} onChange={this.handleEndpointTypeSelectChange}>
                                <option value="URL">URL</option>
                                <option value="AddressEndpoint">Address Endpoint</option>
                            </Form.Select>
                            <Form.Label className="SOAPAction">SOAP Action</Form.Label>
                            <Form.Control type="text" placeholder="eg: SOAP Action" />
                            <Form.Label className="PathAxis2Repository">Path to Axis2 Repository</Form.Label>
                            <Form.Control type="text" placeholder="eg: Path to Axis2 Repository" />
                            <Form.Label className="PathAxis2XML">Path to Axis2 XML</Form.Label>
                            <Form.Control type="text" placeholder="eg: Path to Axis2 XML" />
                            <br />
                            <Form.Check type="checkbox" className="Axis2ClientOptions" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }} >Init Axis2 Client Options</span>} />
                            {selectedEndpointType === "URL" && (
                                <>
                                    <Form.Label className="ServiceURL">Service URL</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Service URL" />
                                </>
                            )}
                            {selectedEndpointType === "AddressEndpoint" && (
                                <>
                                    <Form.Label className="AddressEndpointType">Address Endpoint</Form.Label>
                                    {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                    <Form.Control type="text" readOnly />
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>   
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Source
                    </Modal.Title>
                    <Form>
                        <Form.Group> 
                            <Form.Label className="PayloadType">Payload Type</Form.Label>
                            <Form.Select value={selectedPayloadType} onChange={this.handlePayloadTypeSelectChange}>
                                <option value="XPATH">XPATH</option>
                                <option value="Property">Property</option>
                                <option value="ENVELOP">ENVELOP</option>
                            </Form.Select> 
                            {selectedPayloadType === "XPATH" && (
                                <>
                                    <Form.Label className="PayloadMessageXPath">Payload Message Xpath</Form.Label>
                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                    <Form.Control type="text" readOnly/>
                                </>
                            )} 
                            {selectedPayloadType === "Property" && (
                                <>
                                    <Form.Label className="PayloadProperty">Payload Property</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Payload Property"/>
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>   
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Target
                    </Modal.Title>
                    <Form>
                        <Form.Group>  
                            <Form.Label className="ResultType">Result Type</Form.Label> 
                            <Form.Select value={selectedResultType} onChange={this.handleResultTypeSelectChange}>
                                <option value="XPATH">XPATH</option>
                                <option value="Property">Property</option> 
                            </Form.Select>
                            {selectedResultType === "XPATH" && (
                                <>
                                    <Form.Label className="ResultMessageXPath">Result Message Xpath</Form.Label>
                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                    <Form.Control type="text" readOnly/>
                                </>
                            )}
                            {selectedResultType === "Property" && (
                                <>
                                    <Form.Label className="ResultContextProperty">Result Context Property</Form.Label>
                                    <Form.Control type="text" placeholder="eg: context_property_name"/>
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>   
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        WS
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="SecurityType">Security Type</Form.Label>    
                            <Form.Select value={selectedSecurityType} onChange={this.handleSecurityTypeSelectChange}>
                                <option value="FALSE">FALSE</option>
                                <option value="TRUE">TRUE</option>
                            </Form.Select>
                            {selectedSecurityType === "TRUE" && (
                                <>
                                    <Form.Label className="Policies">Policies</Form.Label>
                                    <Form.Select value={selectedPolicies} onChange={this.handlePoliciesSelectChange}>
                                        <option value="FALSE">FALSE</option>
                                        <option value="TRUE">TRUE</option>
                                    </Form.Select>
                                    {selectedPolicies === "FALSE" && (
                                        <>
                                            <Form.Label className="PolicyKey">Policy Key</Form.Label>
                                            {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                            <Form.Control type="text" readOnly/>
                                        </>
                                    )}
                                    {selectedPolicies === "TRUE" && (
                                        <>  
                                            <Form.Label className="OutboundPolicyKey">Outbound Policy Key</Form.Label>
                                            {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                            <Form.Control type="text" readOnly/>
                                            <Form.Label className="InboundPolicyKey">Inbound Policy Key</Form.Label>
                                            {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                            <Form.Control type="text" readOnly/>
                                        </>
                                    )}
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>   
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Misc
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
                        </Form.Group>
                    </Form>
                </Row>   
            </Modal.Body>
        </> 
    )
  }
}