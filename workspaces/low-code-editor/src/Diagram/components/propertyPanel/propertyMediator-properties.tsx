import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
  selectedPropertyName: string,
  selectedPropertyAction: string,
  selectedPropertyDataType: string,
  selectedPropertyScope: string,
};

export default class PropertyMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedPropertyName: 'NewProperty',
            selectedPropertyAction: 'set',
            selectedPropertyDataType: 'STRING',
            selectedPropertyScope: 'default',
        }; 
    }
    handlePropertyNameSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedPropertyName: event.target.value });
    };
    handlePropertyActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPropertyAction = event.target.value;
        let selectedPropertyDataType = this.state.selectedPropertyDataType;
      
        if (selectedPropertyAction === 'remove') {
          selectedPropertyDataType = ''; // Set the value to an empty string
        }
      
        this.setState({ selectedPropertyAction, selectedPropertyDataType });
      };
    handlePropertyDataTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedPropertyDataType: event.target.value });
    };
    handlePropertyScopeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedPropertyScope: event.target.value });
    };
        render() {
            const { selectedPropertyName, selectedPropertyDataType, selectedPropertyAction, selectedPropertyScope  } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Property Mediator Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="PropertyName">Property Name</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">A name for the property</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Select value={selectedPropertyName} onChange={this.handlePropertyNameSelectChange}>
                                        <option value="NewProperty">New Property...</option>
                                        <option value="Action">Action</option>
                                        <option value="COPY_CONTENT">COPY_CONTENT_LENGTH_FROM_INCOMING</option>
                                        <option value="CacheLevel">CacheLevel</option>
                                        <option value="ClientApiNonBlocking">ClientApiNonBlocking</option>
                                        <option value="ConcurrentConsumers">ConcurrentConsumers</option>
                                        <option value="ContentType">ContentType</option>
                                        <option value="disableAddressingForOutMessages">disableAddressingForOutMessages</option>
                                        <option value="DISABLE_CHUNKING">DISABLE_CHUNKING</option>
                                        <option value="DISABLE_SMOOKS_RESULT_PAYLOAD">DISABLE_SMOOKS_RESULT_PAYLOAD</option>
                                        <option value="ERROR_CODE">ERROR_CODE</option>
                                        <option value="ERROR_DETAIL">ERROR_DETAIL</option>
                                        <option value="ERROR_EXCEPTION">ERROR_EXCEPTION</option>
                                        <option value="ERROR_MESSAGE">ERROR_MESSAGE</option>
                                        <option value="FAULTS_AS_HTTP_200">FAULTS_AS_HTTP_200</option>
                                        <option value="FORCE_ERROR_ON_SOAP_FAULT">FORCE_ERROR_ON_SOAP_FAULT</option>
                                        <option value="FORCE_HTTP_1">FORCE_HTTP_1.0</option>
                                        <option value="FORCE_HTTP_CONTENT_LENGTH">FORCE_HTTP_CONTENT_LENGTH</option>
                                        <option value="FORCE_POST_PUT_NOBODY">FORCE_POST_PUT_NOBODY</option>
                                        <option value="FORCE_SC_ACCEPTED">FORCE_SC_ACCEPTED</option>
                                        <option value="FaultTo">FaultTo </option>
                                        <option value="From">From</option>
                                        <option value="HTTP_ETAG">HTTP_ETAG</option>
                                        <option value="HTTP_SC">HTTP_SC</option>
                                        <option value="JMS_COORELATION_ID">JMS_COORELATION_ID</option>
                                        <option value="messageType">messageType</option>
                                        <option value="MESSAGEFORMAT">MESSAGEFORMAT</option>   
                                        <option value="MaxConcurrentConsumers">MaxConcurrentConsumers</option>
                                        <option value="MercuryLastMessage">MercuryLastMessage</option>
                                        <option value="MercurySequenceKey">MercurySequenceKey</option>
                                        <option value="MessagelD">MessagelD </option>
                                        <option value="NO_ENTITY_BODY">NO_ENTITY_BODY</option>
                                        <option value="NO_KEEPALIVE">NO_KEEPALIVE</option>
                                        <option value="OUT_ONLY">OUT_ONLY</option>
                                        <option value="OperationName">OperationName</option>
                                        <option value="POST_TO_URI">POST_TO_URI</option>
                                        <option value="PreserveProcessedHeaders">PreserveProcessedHeaders</option>
                                        <option value="PRESERVE_WS_ADDRESSING">PRESERVE_WS_ADDRESSING</option>
                                        <option value="REQUEST_HOST_HEADER">REQUEST_HOST_HEADER</option>
                                        <option value="RESPONSE">RESPONSE</option>
                                        <option value="REST_URL_POSTFIX">REST_URL_POSTFIX</option>
                                        <option value="RelatesTo">RelatesTo</option>
                                        <option value="ReplyTo">ReplyTo</option>
                                        <option value="SERVER_IP">SERVER_IP</option>
                                        <option value="SYSTEM_DATE">SYSTEM_DATE</option>
                                        <option value="SYSTEM_TIME">SYSTEM_TIME</option>
                                        <option value="TRANSPORT_HEADERS">TRANSPORT_HEADERS</option>
                                        <option value="TRANSPORT_IN_NAME">TRANSPORT_IN_NAME</option>
                                        <option value="To">To</option>
                                        <option value="transportNonBlocking">transportNonBlocking</option>
                                        <option value="transportJmsConnectionFactory">transport.jms.ConnectionFactory</option>
                                        <option value="transportJmsDestination">transport.jms.Destination</option>
                                        <option value="transportJmsDestinationType">transport.jms.DestinationType</option>
                                        <option value="transportJmsReplyDestination">transport.jms.ReplyDestination</option>
                                        <option value="transportJmsWrapper">transport.jms.Wrapper</option>
                                        <option value="transportVfsFileURI ">transport.vfs.FileURI</option>
                                        <option value="transportVfsContentType">transport.vfs.ContentType</option>
                                        <option value="transportVfsFileNamePattern">transport.vfs.FileNamePattern</option>
                                        <option value="transportPollInterval ">transport.PollInterval</option>
                                        <option value="transportVfsActionAfterProcess">transport.vfs.ActionAfterProcess</option>
                                        <option value="transportVfsMoveAfterProcess">transport.vfs.MoveAfterProcess</option>
                                        <option value="transportVfsActionAfterErrors">transport.vfs.ActionAfterErrors</option>
                                        <option value="transportVfsMoveAfterErrors">transport.vfs.MoveAfterErrors</option>
                                        <option value="transportVfsActionAfterFailure">transport.vfs.ActionAfterFailure</option>
                                        <option value="transportVfsMoveAfterFailure">transport.vfs.MoveAfterFailure</option>
                                        <option value="transportVfsReplyFileURI">transport.vfs.ReplyFileURI</option>
                                        <option value="transportVfsReplyFileName">transport.vfs.ReplyFileName</option>
                                        <option value="transportVfsMoveTimestampFormat">transport.vfs.MoveTimestampFormat</option>
                                    </Form.Select>
                                    {selectedPropertyName === "NewProperty" && (
                                        <>
                                            <Form.Label className="NewPropertyName">New Property Name</Form.Label>
                                            <Form.Control type="text" placeholder='eg: New Property Name'/>               
                                        </>
                                    )}
                                    <Form.Label className="PropertyAction">Property Action</Form.Label>  
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The action to be performed for the property. Set: If this is selected, the property value is set in the message context. Remove: If this is selected, the property is removed from the message context</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Select value={selectedPropertyAction} onChange={this.handlePropertyActionSelectChange}>
                                        <option value="set">set</option>
                                        <option value="remove">remove</option>
                                    </Form.Select>
                                    {selectedPropertyAction === "set" && (
                                        <>
                                            <Form.Label className="PropertyDataType">Property Data Type</Form.Label>
                                            <Form.Select value={selectedPropertyDataType} onChange={this.handlePropertyDataTypeSelectChange}>
                                                <option value="STRING">STRING</option>
                                                <option value="INTEGER">INTEGER</option>
                                                <option value="BOOLEAN">BOOLEAN</option>
                                                <option value="DOUBLE">DOUBLE</option>
                                                <option value="FLOAT">FLOAT</option>
                                                <option value="LONG">LONG</option>
                                                <option value="SHORT">SHORT</option>
                                                <option value="OM">OM</option>
                                                <option value="JSON">JSON</option>
                                            </Form.Select>               
                                        </>
                                    )}  
                                    <Form.Label className="PropertyScope">Property Scope</Form.Label>  
                                    <Form.Select value={selectedPropertyScope} onChange={this.handlePropertyScopeSelectChange}>
                                        <option value="default">default</option>
                                        <option value="transport">transport</option>
                                        <option value="axis2">axis2</option>
                                        <option value="axis2-client">axis2-client</option>
                                        <option value="operation">operation</option>
                                        <option value="registry">registry</option>
                                        <option value="system">system</option>
                                        <option value="analytics">analytics</option>                     
                                    </Form.Select> 
                                    <br/>
                                    {selectedPropertyDataType ==="" ? (
                                        <>  
                                            <Row className='mb-4'>
                                                <Modal.Title className='text-secondary'>
                                                    Value
                                                </Modal.Title>
                                            </Row>
                                        </>
                                    ) : selectedPropertyDataType === "STRING" ? (
                                        <>
                                            <Row className='mb-4'>
                                                <Modal.Title className='text-secondary'>
                                                    Value
                                                </Modal.Title>
                                                <Form>
                                                    <Form.Group>
                                                        <Form.Label className="Value">Value</Form.Label>
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <Form.Control type="text" value="Ex" readOnly className="small-text" /> {/* When a user clicks this EX textbox, the Expression Selector Model appears*/}
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Control type="text" placeholder="expression:" className="large-space" />
                                                                </div>
                                                            </div>
                                                        <Form.Label className="ValueStringPattern">Value String Pattern</Form.Label>
                                                        <Form.Control type="text" /> 
                                                        <Form.Label className="ValueStringCapturingGroup">Value String Capturing Group</Form.Label>
                                                        <Form.Control type="text" placeholder="eg: 0"/>

                                                    
                                                    </Form.Group>
                                                </Form>
                                            </Row>
                                        </>
                                    ) : (
                                        <>
                                            <Row className='mb-4'>
                                                <Modal.Title className='text-secondary'>
                                                    Value
                                                </Modal.Title>
                                                <Form>
                                                    <Form.Group>
                                                        <Form.Label className="Value">Value</Form.Label>
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <Form.Control type="text" value="Ex" readOnly className="small-text" /> {/* When user click on EX, going to the Expression Selector*/}
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Control type="text" placeholder="expression:" className="large-space" />
                                                                </div>
                                                            </div>
                                                    </Form.Group>
                                                </Form>
                                            </Row>
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