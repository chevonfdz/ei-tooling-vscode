import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button, FormControl } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedAvaDataServices: string;
    selectedSourceType: string;
    selectedOperationType: string;
    selectedTargetType: string;
};

export default class DataServiceCallMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedAvaDataServices: "Static",
            selectedSourceType: "INLINE",
            selectedOperationType: "SINGLE",
            selectedTargetType: "BODY"
    };
}
handleAvaDataServicesSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedAvaDataServices: event.target.value });
};
handleSourceTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedSourceType: event.target.value });
};
handleOperationTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOperationType: event.target.value });
};
handleTargetTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedTargetType: event.target.value });
};

  render() {
    const { selectedAvaDataServices, selectedSourceType, selectedOperationType, selectedTargetType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>DSS Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="AvaDataServices">Available Data Services</Form.Label>
                            <Form.Select value={selectedAvaDataServices} onChange={this.handleAvaDataServicesSelectChange}>
                                <option value="Static">Select from available Data Services</option>
                            </Form.Select>
                            <Form.Label className="ServiceName">Service Name</Form.Label>
                            <FormControl type="text" placeholder="eg: Service Name" />
                            <Form.Label className="SourceType">Source Type</Form.Label>
                            <Form.Select value={selectedSourceType} onChange={this.handleSourceTypeSelectChange}>
                                <option value="INLINE">INLINE</option>
                                <option value="BODY">BODY</option>
                            </Form.Select>
                            <Form.Label className="OperationType">Operation Type</Form.Label>
                            <Form.Select value={selectedOperationType} onChange={this.handleOperationTypeSelectChange}>
                                <option value="SINGLE">SINGLE</option>
                                <option value="BATCH">BATCH</option>
                                <option value="REQUESTBOX">REQUESTBOX</option>
                            </Form.Select>
                            {selectedSourceType === "INLINE" && (
                                <>
                                    <Form.Label className="InlineSource">Operations</Form.Label>
                                    {/* When a user clicks this textbox, the AbstractDSSOperation Model appears.*/}
                                    <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
                                </>
                            )}
                            <Form.Label className="TargetType">Target Type</Form.Label>
                            <Form.Select value={selectedTargetType} onChange={this.handleTargetTypeSelectChange}>
                                <option value="BODY">BODY</option>
                                <option value="PROPERTY">PROPERTY</option>
                            </Form.Select>
                            {selectedTargetType === "PROPERTY" && (
                                <>
                                    <Form.Label className="TargetProperty">Target Property</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Target Property" />
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