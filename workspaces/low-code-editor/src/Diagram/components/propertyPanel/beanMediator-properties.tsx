import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedAction: string;
    selectedValueType: string;
    selectedTargetType: string;
};

export default class BeanMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedAction: "CREATE",
            selectedValueType: "LITERAL",
            selectedTargetType: "LITERAL",
        }; 
    }
    handleActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedAction: event.target.value });
    };
    handleValueTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedValueType: event.target.value });
    };
    handleTargetTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedTargetType: event.target.value });
    };
        render() {
            const { selectedAction, selectedValueType, selectedTargetType } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Bean Mediator Property</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <br />
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="Action">Action</Form.Label>
                                    <OverlayTrigger placement="right"
                                        overlay={
                                            <Tooltip id="help-tooltip">
                                            CREATE: 
                                            <br />
                                            This action creates a new JavaBean
                                            <br />
                                            <br />
                                            REMOVE: 
                                            <br />
                                            This action removes an existing JavaBean
                                            <br />
                                            <br />
                                            SET_PROPERTY: 
                                            <br />
                                            This action sets a property of an existing JavaBean
                                            <br />
                                            <br />
                                            GET_PROPERTY: 
                                            <br />
                                            This action retrieves a property of an existing JavaBean
                                            </Tooltip>
                                        }
                                        >
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Select value={selectedAction} onChange={this.handleActionSelectChange}>
                                        <option value="CREATE">CREATE</option>
                                        <option value="REMOVE">REMOVE</option>
                                        <option value="SET_PROPERTY">SET_PROPERTY</option>
                                        <option value="GET_PROPERTY">GET_PROPERTY</option>
                                    </Form.Select> 
                                    {selectedAction === "CREATE" && (
                                        <>
                                            <Form.Label className="Class">Class</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The class on which the action selected for the Action parameter is performed by the Beanstalks manager</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Class'/>
                                            <Form.Label className="Var">Var</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The variable which is created, removed, set or retrieved for the JavaBeans based on the value selected for the Action Parameter</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Variable'/>
                                        </>
                                    )}
                                    {selectedAction === "REMOVE" && (
                                        <>
                                            <Form.Label className="Var">Var</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The variable which is created, removed, set or retrieved for the JavaBeans based on the value selected for the Action Parameter</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Variable'/>
                                        </>
                                    )}   
                                    {selectedAction === "SET_PROPERTY" && (
                                        <>  
                                            <Form.Label className="Var">Var</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The variable which is created, removed, set or retrieved for the JavaBeans based on the value selected for the Action Parameter</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Variable'/>
                                            <Form.Label className="Property">Property</Form.Label>
                                            <Form.Control type="text" placeholder='eg: Property'/>
                                            <br />
                                            <Row className='mb-4'>
                                                <Modal.Title className='text-secondary'>
                                                    Value
                                                </Modal.Title>
                                                <Form>
                                                    <Form.Group>
                                                        <Form.Label className="ValueType">Value Type</Form.Label>
                                                        <Form.Select value={selectedValueType} onChange={this.handleValueTypeSelectChange}>
                                                            <option value="LITERAL">LITERAL</option>
                                                            <option value="EXPRESSION">EXPRESSION</option>
                                                        </Form.Select> 
                                                        {selectedValueType === "LITERAL" && (
                                                            <>
                                                                <Form.Label className="Literal">Literal</Form.Label>
                                                                <Form.Control type="text" placeholder='eg: Literal'/>
                                                            </>
                                                        )}
                                                        {selectedValueType === "EXPRESSION" && (
                                                            <>
                                                                <Form.Label className="Expression">Expression</Form.Label>
                                                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                                <Form.Control type="text" readOnly/>
                                                            </>
                                                        )}
                                                    </Form.Group>
                                                </Form>
                                            </Row>        
                                        </>
                                    )}
                                    {selectedAction === "GET_PROPERTY" && (
                                        <>
                                            <Form.Label className="Var">Var</Form.Label>
                                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The variable which is created, removed, set or retrieved for the JavaBeans based on the value selected for the Action Parameter</Tooltip>}>
                                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                </span>
                                            </OverlayTrigger>
                                            <Form.Control type="text" placeholder='eg: Variable'/>
                                            <Form.Label className="Property">Property</Form.Label>
                                            <Form.Control type="text" placeholder='eg: Property'/>
                                            <br />
                                            <Row className='mb-4'>
                                                <Modal.Title className='text-secondary'>
                                                    Target
                                                </Modal.Title>
                                                <Form>
                                                    <Form.Group>
                                                        <Form.Label className="TargetType">Target Type</Form.Label>
                                                        <Form.Select value={selectedTargetType} onChange={this.handleTargetTypeSelectChange}>
                                                            <option value="LITERAL">LITERAL</option>
                                                            <option value="EXPRESSION">EXPRESSION</option>
                                                        </Form.Select> 
                                                        {selectedTargetType === "LITERAL" && (
                                                            <>
                                                                <Form.Label className="Literal">Literal</Form.Label>
                                                                <Form.Control type="text" placeholder='eg: Literal'/>
                                                            </>
                                                        )}
                                                        {selectedTargetType === "EXPRESSION" && (
                                                            <>
                                                                <Form.Label className="Expression">Expression</Form.Label>
                                                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                                <Form.Control type="text" readOnly/>
                                                            </>
                                                        )}
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