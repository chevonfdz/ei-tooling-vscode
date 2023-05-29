import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedTargetAction: string;
    selectedRuleSetType: string;
    selectedRuleSetSourceType: string;
};

export default class RuleMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedTargetAction: "Replace",
            selectedRuleSetType: "Regular",
            selectedRuleSetSourceType: "INLINE",
        };
}
handleTargetActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedTargetAction: event.target.value });
};
handleRuleSetTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedRuleSetType: event.target.value });
};
handleRuleSetSourceTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedRuleSetSourceType: event.target.value });
};

  render() {
    const { selectedTargetAction, selectedRuleSetType, selectedRuleSetSourceType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Rule Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Source
                    </Modal.Title>
                    <Form>
                        <Form.Group>    
                            <Form.Label className="SourceValue">Source Value</Form.Label>
                            <Form.Control type="text" placeholder="eg: Source Value" />
                            <Form.Label className="SourceXPath">Source XPath</Form.Label>
                            {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                            <Form.Control type="text" readOnly />
                        </Form.Group>
                    </Form>
                </Row>  
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Target
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="TargetValue">Target Value</Form.Label>
                            <Form.Control type="text" placeholder="eg: Target Value" />
                            <Form.Label className="TargetAction">Target Action</Form.Label>
                            <Form.Select value={selectedTargetAction} onChange={this.handleTargetActionSelectChange}>
                                <option value="Replace">Replace</option>
                                <option value="Child">Child</option>
                                <option value="Sibling">Sibling</option>
                                </Form.Select>
                            <Form.Label className="TargetXPath">Target XPath</Form.Label>
                            {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                            <Form.Control type="text" readOnly />
                            <Form.Label className="TargetResultXPath">Target Result XPath</Form.Label>
                            {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                            <Form.Control type="text" readOnly />
                        </Form.Group>
                    </Form>
                </Row>  
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Rule Set
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="RuleSetType">Rule Set Type</Form.Label>
                            <Form.Select value={selectedRuleSetType} onChange={this.handleRuleSetTypeSelectChange}>
                                <option value="Regular">Regular</option>
                                <option value="DecisionTable">Decision Table</option>
                            </Form.Select>
                            <Form.Label className="RuleSetSourceType">Rule Set Source Type</Form.Label>
                            <Form.Select value={selectedRuleSetSourceType} onChange={this.handleRuleSetSourceTypeSelectChange}>
                                <option value="INLINE">INLINE</option>
                                <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>
                                <option value="URL">URL</option>
                            </Form.Select>
                            {selectedRuleSetSourceType === "INLINE" && (
                                <>
                                    <Form.Label className="RuleSetSourceCode">Rule Set Source Code</Form.Label>
                                    <Form.Control as="textarea" style={{ minHeight: '200px' }}>&lt;code/&gt;</Form.Control>
                                </>
                            )}
                            {selectedRuleSetSourceType === "REGISTRY_REFERENCE" && (
                                <>
                                    <Form.Label className="InlineRegistryKey">Inline Registry Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                    <Form.Control type="text" readOnly />
                                </>
                            )}
                            {selectedRuleSetSourceType === "URL" && (
                                <>
                                    <Form.Label className="RuleSetURL">Rule Set URL</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Rule Set URL" />
                                </>
                            )}
                            
                        </Form.Group>
                    </Form>
                </Row> 
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Input Facts
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="InputWrapperName">Input Wrapper Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: Input Wrapper Name" />
                            <Form.Label className="InputNamespace">Input Namespace</Form.Label>
                            <Form.Control type="text" placeholder="eg: Input Namespace" />
                            <Form.Label className="FactsConfiguration">Facts Configuration</Form.Label>
                            {/* When a user clicks this textbox, the RuleFactsConfiguration Model appears.*/}
                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly />
                        </Form.Group>
                    </Form>
                </Row>
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Output Facts
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="OutputWrapperName">Output Wrapper Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: Output Wrapper Name" />
                            <Form.Label className="OutputNamespace">Output Namespace</Form.Label>
                            <Form.Control type="text" placeholder="eg: Output Namespace" />
                            <Form.Label className="ResultsConfiguration">Results Configuration</Form.Label>
                            {/* When a user clicks this textbox, the RuleResultsConfiguration Model appears.*/}
                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly />
                        </Form.Group>
                    </Form>
                </Row>
                < br/ >
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