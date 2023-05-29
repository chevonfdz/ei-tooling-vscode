import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedOnAcceptBSeqType: string;
    selectedOnRejectBSeqType: string;
    selectedPolicyType: string;
};

export default class ThrottleMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedOnAcceptBSeqType: "ANONYMOUS",
            selectedOnRejectBSeqType: "ANONYMOUS",
            selectedPolicyType: "INLINE"
        };
}
handleOnAcceptBSeqTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOnAcceptBSeqType: event.target.value });
};
handleOnRejectBSeqTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOnRejectBSeqType: event.target.value });
};
handlePolicyTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedPolicyType: event.target.value });
};

  render() {
    const { selectedOnAcceptBSeqType, selectedOnRejectBSeqType, selectedPolicyType} = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Throttle Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        General
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="Group Id">Group Id</Form.Label> 
                            <Form.Control type="text" placeholder='eg: Group Id'/> 
                        </Form.Group>
                    </Form>
                </Row> 
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        OnAccept
                    </Modal.Title>
                    <Form>
                        <Form.Group> 
                            <Form.Label className="OnAcceptBSeqType">On Accept Branch Sequence Type</Form.Label> 
                            <Form.Select value={selectedOnAcceptBSeqType} onChange={this.handleOnAcceptBSeqTypeSelectChange}>
                                <option value="ANONYMOUS">ANONYMOUS</option>
                                <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>
                            </Form.Select>
                            {selectedOnAcceptBSeqType === "REGISTRY_REFERENCE" && (   
                                <>    
                                    <Form.Label className="OnAcceptBSeqKey">On Accept Branch Sequence Key</Form.Label> 
                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                    <Form.Control type="text" readOnly/>
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        OnReject
                    </Modal.Title>
                    <Form>
                        <Form.Group>  
                            <Form.Label className="OnRejectBSeqType">On Reject Branch Sequence Type</Form.Label> 
                            <Form.Select value={selectedOnRejectBSeqType} onChange={this.handleOnRejectBSeqTypeSelectChange}>
                                <option value="ANONYMOUS">ANONYMOUS</option>
                                <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>
                            </Form.Select>
                            {selectedOnRejectBSeqType === "REGISTRY_REFERENCE" && (
                                <>
                                    <Form.Label className="OnRejectBSeqKey">On Reject Branch Sequence Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                    <Form.Control type="text" readOnly/>
                                </>
                            )}    
                        </Form.Group>
                    </Form>
                </Row>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Throttle Policy
                    </Modal.Title>
                    <Form>
                        <Form.Group> 
                            <Form.Label className="PolicyType">Policy Type</Form.Label>
                            <Form.Select value={selectedPolicyType} onChange={this.handlePolicyTypeSelectChange}>
                                <option value="INLINE">INLINE</option>
                                <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>      
                            </Form.Select>
                            {selectedPolicyType === "INLINE" && (
                                <>
                                    <Form.Label className="PolicyEntries">Policy Entries</Form.Label>
                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                    <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
                                </>
                            )}  
                            {selectedPolicyType === "REGISTRY_REFERENCE" && (
                                <>
                                    <Form.Label className="PolicyKey">Policy Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                    <Form.Control type="text" readOnly/>
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
