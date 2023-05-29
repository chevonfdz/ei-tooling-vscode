import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
  selectedPayloadFormat: string,
  selectedMediaType: string,
  selectedTemplateType: string,
};

export default class PayloadFactoryMediatorProperty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        selectedPayloadFormat: 'Inline',
        selectedMediaType: 'xml',
        selectedTemplateType: 'Default',
    };
}

  handlePayloadFormatSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedPayloadFormat: event.target.value });
  };
  handleMediaTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedMediaType: event.target.value });
  };
  handleTemplateTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedTemplateType: event.target.value });
  };  
  

  render() {
    const { selectedPayloadFormat, selectedMediaType, selectedTemplateType } = this.state;


    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'> PayloadFactory Mediator Properties</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='PayloadFormat'>Payload Format</Form.Label>
                            <Form.Select value={selectedPayloadFormat} onChange={this.handlePayloadFormatSelectChange}>
                                <option value="Inline">Inline</option>
                                <option value="RegistryReference">Registry Reference</option>
                            </Form.Select>
                            <Form.Label className='MediaType'>Media Type</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Used to specify whether the message payload should be created in JSON, XML, or text</Tooltip>}>
                              <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                  <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                              </span>
                            </OverlayTrigger>
                            <Form.Select value={selectedMediaType} onChange={this.handleMediaTypeSelectChange}>
                                <option value="xml">xml</option>
                                <option value="json">json</option>
                                <option value="text">text</option>
                            </Form.Select>
                            <Form.Label className='TemplateType'>Template Type</Form.Label>
                            <Form.Select value={selectedTemplateType} onChange={this.handleTemplateTypeSelectChange}>
                                <option value="xml">Default</option>
                                <option value="json">Freemarker</option>
                            </Form.Select>
                            {selectedPayloadFormat === "RegistryReference" && (
                              <>
                                  <Form.Label className="PayloadKey">Payload Key</Form.Label>
                                  <Form.Control type="text" readOnly /> {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                              </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Payload
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            {selectedPayloadFormat === "Inline" && (
                                <>
                                <Form.Label className="Payload">Payload</Form.Label>
                                <Form.Control as="textarea" style={{ minHeight: '200px' }}>
                                    &lt;inline/&gt;
                                </Form.Control>
                            </>
                              )}
                            <Form.Label className='Args'>Args</Form.Label>
                            <Form.Control type="text" readOnly /> {/*When a user clicks this textbox, the Expression Selector Model or Default Model appears*/}
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
