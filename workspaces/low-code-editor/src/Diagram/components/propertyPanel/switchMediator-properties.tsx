import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
};

export default class SwitchMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}; 
    }
   
        render() {
            const { } = this.state;

            return (
                <>
                    <Modal.Header>
                        <Modal.Title className='text-primary'>Switch Mediator Properties</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='mb-4'>
                            <Modal.Title className='text-secondary'>
                                Properties
                            </Modal.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label className='SourceXPath'>Source XPath</Form.Label>
                                    {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                    <OverlayTrigger placement="right" overlay={
                                        <Tooltip id="help-tooltip">
                                            The source XPath or JSONPath to be evaluated. When specifying a JSONPath, use the format json-eval(&lt;JSON_PATH&gt;), such as json-eval(getQuote.request.symbol)
                                        </Tooltip>
                                        }
                                    >
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Control type="text" readOnly/> 
                                    <Form.Label className='CaseBranches'>Case Branches</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Right click on the mediator and click "Add\Remove Case..." to add more cases</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>{/* Cases will be display in this textbox*/}
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