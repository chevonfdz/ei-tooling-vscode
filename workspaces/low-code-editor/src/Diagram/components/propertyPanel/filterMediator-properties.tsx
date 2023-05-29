import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedConditionType: string;
};

export default class FilterMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedConditionType: "SandREX",
        }; 
    }
    handleConditionTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedConditionType: event.target.value });
    };
        render() {
            const { selectedConditionType } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Filter Mediator Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <br/>
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Condition
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label className="ConditionType">Condition Type</Form.Label>
                                                <OverlayTrigger placement="right"
                                                overlay={
                                                    <Tooltip id="help-tooltip">
                                                    Source and Regular Expression: 
                                                    <br />
                                                    If this option is selected, the Filter mediator matches the evaluation XPath/JSONPath expression as a string against the given regular expression
                                                    <br />
                                                    <br />
                                                    XPath: 
                                                    <br />
                                                    If this option is selected, the Filter mediator tests the given XPath/JSONPath expression as a Boolean expression. When specifying a JSONPath, use the format json-eval(&lt;JSON_PATH&gt;), such as json-eval(getQuote.request.symbol)
                                                    </Tooltip>
                                                    }
                                                    >
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>

                                                <Form.Select onChange={this.handleConditionTypeSelectChange} value={selectedConditionType}>
                                                    <option value="SandREX">Source and Regular Expression</option>
                                                    <option value="XPath">XPath</option> 
                                                </Form.Select>
                                                {selectedConditionType === "SandREX" && (
                                                    <>
                                                        <Form.Label className="NewPropertyName">Regular Expression</Form.Label>
                                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The regular expression to match source value</Tooltip>}>
                                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                            </span>
                                                        </OverlayTrigger>
                                                        <Form.Control type="text" placeholder='eg: None'/>
                                                        <Form.Label className="Source">Source</Form.Label>
                                                        {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The expression to locate the value that matches the regular expression that you can define in the Regex parameter</Tooltip>}>
                                                            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                            </span>
                                                        </OverlayTrigger>
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}
                                                {selectedConditionType === "XPath" && (
                                                    <>
                                                        <Form.Label className="XPath">XPath</Form.Label>
                                                        {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}    
                                                <Form.Control as="textarea" readOnly/> 
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