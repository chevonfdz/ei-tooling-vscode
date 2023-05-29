import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {}
type State = {
    selectedEndpointType: string,
    selectedSourceType: string,
    selectedTargetType: string,
  }
export default class CallMediatorProperty extends Component<Props, State> {
    fileInput: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedEndpointType: 'None',
            selectedSourceType: 'noneST',
            selectedTargetType: 'noneTT',
        };
        this.fileInput = React.createRef(); //use this to store the reference of the file input field
    };
    handleEndpointSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedEndpointType: event.target.value });
    };
    handleSourceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedSourceType: event.target.value });
    };
    handleTargetSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedTargetType: event.target.value });
    };
    render() {
        const { selectedEndpointType, selectedSourceType, selectedTargetType } = this.state

        return (
            <>
                <Modal.Header>
                    <Modal.Title className='text-primary'>Call Mediator Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Properties
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                            <Form.Check type="checkbox" className="EnableBlockingCalls" style={{ display: "flex", alignItems: "center" }} label={
                            <>
                            <span style={{ marginLeft: "10px" }}>Enable Blocking Calls</span>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Help message goes here</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            </>
                            }
                            />
                            </Form.Group>
                        </Form>
                    </Row>
                    <br/ >
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Endpoint Type
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label className="EndpointType">Endpoint Type</Form.Label>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Select the message will be delivered depending on the selected type</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                                </OverlayTrigger>
                                <Form.Select value={selectedEndpointType} onChange={this.handleEndpointSelectChange}>
                                    <option value="INLINE">INLINE</option>
                                    <option value="NONE">NONE</option>
                                    <option value="REGISRTYKEY">REGISRTYKEY</option>
                                    <option value="XPATH">XPATH</option>
                                </Form.Select>
                                {selectedEndpointType === "REGISRTYKEY" && (
                                            <>
                                                <Form.Label className="EndpointRegistryKey">Endpoint Registry Key</Form.Label>
                                                {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                <Form.Control type="text" readOnly />
                                            </>
                                )}
                                {selectedEndpointType === "XPATH" && (
                                            <>
                                                <Form.Label className="EndpointXPATH">Endpoint XPATH</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The endpoint to which the message should be sent will be derived via an XPath expression</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                <Form.Control type="text" readOnly />
                                            </>
                                        )}
                                <Form.Label className="SourceType">Source Type</Form.Label> 
                                <Form.Select value={selectedSourceType} onChange={this.handleSourceSelectChange}>
                                    <option value="noneST">none</option>
                                    <option value="bodyST">body</option>
                                    <option value="propertyST">property</option>
                                    <option value="inlineST">inline</option>
                                    <option value="customST">custom</option>
                                </Form.Select> 
                                {selectedSourceType === "propertyST" && (
                                            <>
                                                <Form.Label className="SourceProperty">SourceProperty</Form.Label>
                                                <Form.Control type="text" placeholder="eg: SourceProperty" />
                                                <Form.Label className="EContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: Content Type" />
                                            </>
                                        )}
                                {selectedSourceType === "inlineST" && (
                                            <>
                                                <Form.Label className="SourcePayload">SourcePayload</Form.Label>
                                                <Form.Control as="textarea" style={{ minHeight: '200px' }}>
                                                    &lt;inline/&gt;
                                                </Form.Control>
                                                <Form.Label className="ContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: Content Type" />
                                            </>
                                        )}
                                {selectedSourceType === "customST" && (
                                            <>  
                                                <Form.Label className="SourceXPath">SourceXPath</Form.Label>
                                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                <Form.Control type="text" readOnly />
                                                <Form.Label className="ContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: Content Type" />
                                            </>
                                        )}
                                <Form.Label className="TargetType">Target Type</Form.Label>
                                <Form.Select value={selectedTargetType} onChange={this.handleTargetSelectChange}>
                                    <option value="noneTT">none</option>
                                    <option value="bodTT">body</option>
                                    <option value="propertyTT">property</option>
                                </Form.Select>
                                {selectedTargetType === "propertyTT" && (
                                            <>
                                                <Form.Label className="TargetProperty">Target Property</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                                <Form.Label className="ContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: Content Type" />
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
                </Modal.Body>
            </>
        )
    }
}