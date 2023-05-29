import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedAggElementType: string; 
    selectedCompletionMinMsgType: string;
    selectedCompletionMaxMsgType: string;
    selectedSequenceType: string;
};

export default class AggregateMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedAggElementType: "ROOT",
            selectedCompletionMinMsgType: "VALUE",
            selectedCompletionMaxMsgType: "VALUE",
            selectedSequenceType: "ANONYMOUS"
    };
}
handleAggElementTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedAggElementType: event.target.value });
};
handleCompletionMinMsgTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCompletionMinMsgType: event.target.value });
};
handleCompletionMaxMsgTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCompletionMaxMsgType: event.target.value });
};
handleSequenceTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedSequenceType: event.target.value });
};

    
    
  render() {
    const { selectedAggElementType, selectedCompletionMinMsgType, selectedCompletionMaxMsgType, selectedSequenceType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Aggregate Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="AggregateID">Aggregate ID</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">This optional attribute can be used to aggregate only responses for split messages that are created by a specific done/iterate mediator. Aggregate ID should be the same as the ID of the corresponding done/iterate mediator that creates split messages</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Control type="text" placeholder="eg: Aggregate ID" />
                            <Form.Label className="EnclosingElementProperty">Enclosing Element Property</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">This parameter is used to accumulate the aggregated messages inside a single property. The name of the relevant property is entered in this field</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Control type="text" placeholder="eg: Enclosing Element Property" />
                            <Form.Label className="CorrelationExpression">Correlation Expression</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">This is an XPath expression which provides the basis on which response messages should be selected for aggregation. This is done by specifying a set of element for which the messages selected should have matching values. A specific aggregation condition is set Via the Aggregation Expression field</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Control type="text" placeholder="eg: Correlation Expression" />
                            <Form.Label className="AggElementType">AggregateElementType</Form.Label>
                            <Form.Select value={selectedAggElementType} onChange={this.handleAggElementTypeSelectChange}>
                                <option value="ROOT">ROOT</option>
                                <option value="CHILD">CHILD</option>
                            </Form.Select>
                            <br />  
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Completion Condition
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="CompletionTimeout">Completion Timeout</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The number of seconds taken by the Aggregate mediator to wait for messages. When this time duration elapses, the aggregation will be completed</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Control type="text" defaultValue="0" />
                                        <Form.Label className="CompletionMinMsgType">Completion Min Messages Type</Form.Label>
                                        <Form.Select value={selectedCompletionMinMsgType} onChange={this.handleCompletionMinMsgTypeSelectChange}>
                                            <option value="VALUE">VALUE</option>
                                            <option value="EXPRESSION">EXPRESSION</option>
                                        </Form.Select>    
                                        {selectedCompletionMinMsgType === "VALUE" && (
                                            <>
                                                <Form.Label className="CompletionMinMsgValues">Completion Min Messages Values</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Minimum number of messages required for the aggregation to complete. When the time duration entered in the Completion Timeout field is elapsed, the aggregation will be completed even if the number of minimum response message specified has not been received</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" defaultValue="-1" />
                                            </>
                                        )}
                                        {selectedCompletionMinMsgType === "EXPRESSION" && (
                                                <>
                                                    <Form.Label className="CompletionMinMsgValues">Completion Min Messages</Form.Label>
                                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                    <Form.Control type="text" readOnly />
                                                </>
                                        )}
                                        <Form.Label className="CompletionMaxMsgType">Completion Max Messages Type</Form.Label>
                                        <Form.Select value={selectedCompletionMaxMsgType} onChange={this.handleCompletionMaxMsgTypeSelectChange}>
                                            <option value="VALUE">VALUE</option>
                                            <option value="EXPRESSION">EXPRESSION</option>
                                        </Form.Select>    
                                        {selectedCompletionMaxMsgType === "VALUE" && (
                                            <>
                                                <Form.Label className="CompletionMaxMsgValues">Completion Max Messages Values</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Maximum number of messages that can exist aggregation. When the number of response messages received reaches this number, the aggregation will be completed</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" defaultValue="-1" />
                                            </>
                                        )}
                                        {selectedCompletionMaxMsgType === "EXPRESSION" && (
                                                <>
                                                    <Form.Label className="CompletionMaxMsgValues">Completion Max Messages</Form.Label>
                                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                    <Form.Control type="text" readOnly />
                                                </>
                                        )}
                                    </Form.Group>
                                </Form>
                            </Row> 
                            <br />
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    OnComplete
                                </Modal.Title>
                                <Form>
                                    <Form.Group>   
                                        <Form.Label className="AggregationExpression">Aggregation Expression</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">XPath expression specifying which elements should be aggregated. A set of messages that are selected for aggregation is determined by the value specified in the Correlation Expression field</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Control type="text" placeholder="eg: Aggregate ID" />
                                        <Form.Label className="SequenceType">Sequence Type</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Select the sequence type to run when the aggregation is complete</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Select value={selectedSequenceType} onChange={this.handleSequenceTypeSelectChange}>
                                            <option value="ANONYMOUS">ANONYMOUS</option>
                                            <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>
                                        </Form.Select>    
                                        {selectedSequenceType === "REGISTRY_REFERENCE" && (
                                            <>
                                                <Form.Label className="SequenceKey">Sequence Key</Form.Label>
                                                {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                <Form.Control type="text" placeholder="eg: Sequence Key" />
                                            </>
                                        )}
                                    </Form.Group> 
                                </Form>
                            </Row>          
                        </Form.Group>
                    </Form>
                </Row>   
            </Modal.Body>
        </> 
    )
  }
}