import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedXSLTSchemaType: string;
};

export default class XSLTMediatorProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedXSLTSchemaType: "Static",
    };
}
handleXSLTSchemaTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedXSLTSchemaType: event.target.value });
};
    
    
  render() {
    const { selectedXSLTSchemaType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>XSLT Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="SourceXPath">Source XPath</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">This determines the element to which the given XSLT transformation should be applied via an XPath expression. If the source element is not specified, the XSLT transformation is applied to the first child of the SOAP body</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>
                            {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                            <Form.Control type="text" readOnly/>
                            <br/>
                            <Row className='mb-4'>
                                <Modal.Title className='text-secondary'>
                                    XSLT Schema Key
                                </Modal.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="XSLTSchemaType">XSLT Schema Key Type</Form.Label>
                                        <Form.Select value={selectedXSLTSchemaType} onChange={this.handleXSLTSchemaTypeSelectChange}>
                                            <option value="Static">Static</option>
                                            <option value="Dynamic">Dynamic</option>
                                        </Form.Select>
                                        {selectedXSLTSchemaType === "Static" && (
                                            <>
                                                <Form.Label className="StXSLTSchemaKey">XSLT Static Schema Key</Form.Label>
                                                {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                <Form.Control type="text" readOnly/>
                                            </>
                                        )}
                                        {selectedXSLTSchemaType === "Dynamic" && (
                                            <>
                                                <Form.Label className="DyXSLTSchemaKey">XSLT Dynamic Schema Key</Form.Label>
                                                {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                                                <Form.Control type="text" readOnly/>
                                            </>
                                        )}                                      
                                    </Form.Group>
                                </Form> 
                            </Row>
                            <Form.Label className="Properties">Properties</Form.Label>
                            {/* When a user clicks this textbox, the XSLTProperty Model appears.*/}
                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
                            <Form.Label className="Resources">Resources</Form.Label>
                            {/* When a user clicks this textbox, the XSLTResource Model appears.*/}
                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
                            <Form.Label className="Features">Features</Form.Label>
                            {/* When a user clicks this textbox, the XSLTFeature Model appears.*/}
                            <Form.Control as="textarea" style={{ minHeight: '200px' }} readOnly></Form.Control>
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