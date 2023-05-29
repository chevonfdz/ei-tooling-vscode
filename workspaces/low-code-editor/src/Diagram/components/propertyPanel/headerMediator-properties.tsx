import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedHeaderAction: string;
    selectedScope: string;
    selectedValueType: string;
};

export default class HeaderMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedHeaderAction: "set",
            selectedScope: "default",
            selectedValueType: "LITERAL"
        }; 
    }
    handleHeaderActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedHeaderAction: event.target.value });
    };
    handleScopeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedScope: event.target.value });
    };
    handleValueTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedValueType: event.target.value });
    };
    
    
  render() {
    const { selectedHeaderAction, selectedScope, selectedValueType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Header Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                        {(selectedValueType !== "INLINE" || selectedHeaderAction === "remove") && (
                            <>
                                <Form.Label className="HeaderName">Header Name</Form.Label>
                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The name of the header element</Tooltip>}>
                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                    </span>
                                </OverlayTrigger>
                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                <Form.Control type="text" readOnly/>
                            </>
                        )}

                            <Form.Label className="HeaderAction">Header Action</Form.Label>
                            <OverlayTrigger placement="right"
                                overlay={
                                    <Tooltip id="help-tooltip">
                                    Set: <br />if you want to set the header as a new header <br /> <br />
                                    Remove: <br /> if you want to remove the header from the incoming message
                                    </Tooltip>
                                }
                                >
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Select value={selectedHeaderAction} onChange={this.handleHeaderActionSelectChange}>
                                <option value="set">set</option>
                                <option value="remove">remove</option>
                            </Form.Select>
                            {selectedHeaderAction === "set" && (
                                <>
                                    <br/>
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Header Value
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="ValueType">Value Type</Form.Label>
                                                <Form.Select value={selectedValueType} onChange={this.handleValueTypeSelectChange}>
                                                    <option value="LITERAL">LITERAL</option>
                                                    <option value="EXPRESSION">EXPRESSION</option>
                                                    <option value="INLINE">INLINE</option>
                                                </Form.Select>  
                                                {selectedValueType === "LITERAL" && (
                                                    <>
                                                        <Form.Label className="ValueLiteral">Value Literal</Form.Label>
                                                        <Form.Control type="text" placeholder='eg: Value for Literal'/>
                                                    </>
                                                )}   
                                                {selectedValueType === "EXPRESSION" && (
                                                    <>        
                                                        <Form.Label className="ValueExpression">Value Expression</Form.Label>
                                                        {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}
                                                {selectedValueType === "INLINE" && (
                                                    <>        
                                                        <Form.Label className="ValueExpression">Value Expression</Form.Label>
                                                        <Form.Control type="text" placeholder='eg: Value for Inline'/>
                                                    </>
                                                )}                                           
                                            </Form.Group>
                                        </Form> 
                                    </Row>
                                </>
                            )}
                            <Form.Label className="Scope<">Scope</Form.Label>
                            <OverlayTrigger placement="right"
                                overlay={
                                    <Tooltip id="help-tooltip">
                                    Synapse: <br />To manipulate the SOAP headers <br /> <br />
                                    Transport: <br /> To manipulate the HTTP headers
                                    </Tooltip>
                                }
                                >
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            <Form.Select value={selectedScope} onChange={this.handleScopeSelectChange}>
                                <option value="default">default</option>
                                <option value="transport">transport</option>
                            </Form.Select>
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