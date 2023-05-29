import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {}

type State = {
    selectedOption: string,
    showEndpointRegistryKey: boolean;
    showEndpointRegistryKeyModal: boolean;
  }
export default class CallMediatorProperty extends Component<Props, State> {
    state: State = {
        selectedOption: 'None',
        showEndpointRegistryKey: false,
        showEndpointRegistryKeyModal: false,
    }
    
    handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const showEndpointRegistryKey = value === 'REGISTRYKEY';
        this.setState({ selectedOption: value, showEndpointRegistryKey });
    }

    handleEndpointRegistryKeyClick = () => {
        this.setState({ showEndpointRegistryKeyModal: true });
      };
    
      handleEndpointRegistryKeyModalClose = () => {
        this.setState({ showEndpointRegistryKeyModal: false });
      };
      handleCancel = () => {
        this.setState({ showEndpointRegistryKeyModal: false });
      };
      handleOk = () => {
        // your code here
      }
      

    render() {
        const { selectedOption, showEndpointRegistryKey, showEndpointRegistryKeyModal } = this.state

        return (
            <>
                <Modal.Header>
                    <Modal.Title className='text-primary'>Properties</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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

                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Endpoint Type
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Endpoint Type</Form.Label>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Select the message will be delivered depending on the selected type</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                                </OverlayTrigger>
                                <Form.Select value={selectedOption} onChange={this.handleSelectChange}>
                                    <option value="INLINE">INLINE</option>
                                    <option value="NONE">NONE</option>
                                    <option value="REGISRTYKEY">REGISRTYKEY</option>
                                    <option value="XPATH">XPATH</option>
                                </Form.Select>
                                {selectedOption === "REGISRTYKEY" && (
                                            <>
                                                <Form.Label className="EndpointRegistryKey">Endpoint Registry Key</Form.Label>
                                                <Form.Control type="text" placeholder=" " onClick={this.handleEndpointRegistryKeyClick} />
                                            </>
                                        )}
                                        {/* Need to Add Model to this */}
                                {selectedOption === "XPATH" && (
                                            <>  
                                                <Form.Label className="EndpointXPATH">Endpoint XPATH</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The endpoint to which the message should be sent will be derived via an XPath expression</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" placeholder=" " />
                                            </>
                                        )}
                                <Form.Label>Source Type</Form.Label> 
                                <Form.Select value={selectedOption} onChange={this.handleSelectChange}>
                                    <option value="none">none</option>
                                    <option value="body">body</option>
                                    <option value="property">property</option>
                                    <option value="inline">inline</option>
                                    <option value="custom">custom</option>
                                </Form.Select> 
                                {selectedOption === "property" && (
                                            <>
                                                <Form.Label className="SourceProperty">SourceProperty</Form.Label>
                                                <Form.Control type="text" placeholder="eg: None" />
                                                <Form.Label className="EContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: None" />
                                            </>
                                        )}
                                {selectedOption === "inline" && (
                                            <>
                                                <Form.Label className="SourcePayload">SourcePayload</Form.Label>
                                                <Form.Control as="textarea" style={{ minHeight: '200px' }}>
                                                    &lt;inline/&gt;
                                                </Form.Control>
                                                <Form.Label className="ContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: None" />
                                            </>
                                        )}
                                {selectedOption === "custom" && (
                                            <>
                                                <Form.Label className="SourceXPath">SourceXPath</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                                <Form.Label className="ContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: None" />
                                            </>
                                        )}
                                <Form.Label>Target Type</Form.Label>
                                <Form.Select value={selectedOption} onChange={this.handleSelectChange}>
                                    <option value="none">none</option>
                                    <option value="body">body</option>
                                    <option value="property">property</option>
                                </Form.Select>
                                {selectedOption === "property" && (
                                            <>
                                                <Form.Label className="TargetProperty">Target Property</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                                <Form.Label className="ContentType">Content Type</Form.Label>
                                                <Form.Control type="text" placeholder="eg: None" />
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
                            <Modal show={showEndpointRegistryKeyModal} onHide={this.handleEndpointRegistryKeyModalClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Resource Key</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row className='mb-4'>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className='mt-2 mb-2'>Type the key or specify from <a href="registry-link">registry</a> or <a href="workspace-link">workspace</a></Form.Label>
                                                <Form.Label className='resouceKeyLink'></Form.Label>
                                                <Form.Control type="text" placeholder="eg: None" />
                                                <br/>
                                                <Form.Label className='mt-2 mb-0'> <a href="https://example.com">Create &amp; point to a new resource...</a>
                                                </Form.Label>
                                            </Form.Group>
                                        </Form>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={this.handleOk}>OK</Button>
                                    <Button variant="secondary" onClick={this.handleCancel}>Cancel</Button>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                    </Row>
                </Modal.Body>
            </>
        )
    }
}