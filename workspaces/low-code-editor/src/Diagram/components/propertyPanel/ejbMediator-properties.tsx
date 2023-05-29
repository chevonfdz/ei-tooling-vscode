import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedSessionIdType: string;

};

export default class EJBMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedSessionIdType: "LITERAL",
        }; 
    }
    handleSessionIdTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedSessionIdType: event.target.value });
    };

  render() {
    const { selectedSessionIdType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>EJB Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="Beanstalk">Beanstalk</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Reference to the application server specific connection source information, which is defined at the synapse.properties</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Control type="text" placeholder="eg: Beanstalk" />
                            <Form.Label className="Class">Class</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">This required the remote interface definition provided in the EJB 3.0 &#40;EJB service invocation remote/home interface&#41;</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Control type="text" placeholder="eg: /Class" />
                            <Form.Label className="Method">Method</Form.Label>
                            <Form.Control type="text" placeholder="eg: /Method" />
                            <Form.Group style={{ textAlign: "left" }}>
                                <br />
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Form.Check
                                    type="checkbox"
                                    className="Remove"
                                    label={<span style={{ marginLeft: "10px" }}>Remove</span>}
                                    />
                                    <OverlayTrigger
                                    placement="right"
                                    overlay={<Tooltip id="help-tooltip">Specifies whether the Enterprise Entity Manager should remove the EJB context related parameters once the state full/ stateless session is invoked</Tooltip>}
                                    >
                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                    </span>
                                    </OverlayTrigger>
                                </div>
                            </Form.Group>
                            <Form.Label className="Target">Target</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">If a particular EJB method returns, then the object can be saved against the name provided in the target at the synapse property context</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Control type="text" placeholder="eg: Target" />
                            <Form.Label className="Context">JNDI Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: JNDI Name" />
                            <Form.Label className='MethodArguments'>Method Arguments</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Can be used to define the arguments which is required for the particular EJB method to be invoked Expression/Value</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            {/* When a user clicks this textbox, the MethodArgument Model appears.*/}
                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    Session
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className='SessionIdType'>Session Id Type</Form.Label>
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">When the EJB context is invoked in the form state-full bean then the related EJB session status specified will be stored in here</Tooltip>}>
                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                            </span>
                                        </OverlayTrigger>
                                        <Form.Select value={selectedSessionIdType} onChange={this.handleSessionIdTypeSelectChange}>
                                            <option value="LITERAL">LITERAL</option>
                                            <option value="EXPRESSION">EXPRESSION</option>
                                        </Form.Select>
                                        {selectedSessionIdType === "LITERAL" && (
                                            <>
                                            <Form.Label className="SessionIdLiteral">Session Id Literal</Form.Label>
                                            <Form.Control type="text" placeholder="eg: Session Id Literal" />
                                            </>
                                        )}
                                        {selectedSessionIdType === "EXPRESSION" && (
                                            <>
                                            <Form.Label className="SessionIdExpression">Session Id Expression</Form.Label>
                                            {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                            <Form.Control type="text" readOnly />
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