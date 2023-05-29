import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
  selectedSpecifyAs: string;
  selectedAvaiMessageStore: string;
};

export default class StoreMediatorProperty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedSpecifyAs: 'Value',
      selectedAvaiMessageStore: 'SFMessageStore'
    };
}

handleSpecifyAsSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedSpecifyAs: event.target.value });
};
handleAvaiMessageStoreSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  this.setState({ selectedAvaiMessageStore: event.target.value });
};
   
  render() {
    const { selectedSpecifyAs, selectedAvaiMessageStore } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Store Mediator Properties</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className='mb-4'>
                <Modal.Title className='text-secondary'>
                    Properties
                </Modal.Title>
                <Form>
                  <Form.Group>
                    <Form.Label className="OnStoreSequence">On Store Sequence</Form.Label>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The sequence that will be called before the message gets stored. This sequence should be pre-defined in the registry before it can be entered here</Tooltip>}>
                      <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                      </span>
                    </OverlayTrigger>
                    <Form.Control type="text" readOnly/> {/* When user click it going to the Resource Key Model*/}
                  </Form.Group>
                </Form>
              </Row>      
              <Row className='mb-4'>
                <Modal.Title className='text-secondary'>
                    Message Store
                </Modal.Title>
                <Form>
                  <Form.Group>
                    <Form.Label className="SpecifyAs">Specify As</Form.Label>
                    <Form.Select value={selectedSpecifyAs} onChange={this.handleSpecifyAsSelectChange}>
                      <option value="Value">Value</option>
                      <option value="Expression">Expression</option>
                    </Form.Select>
                    {selectedSpecifyAs === "Value" && (
                      <>
                        <Form.Label className="AvaiMessageStore">Available Message Store</Form.Label>
                        <Form.Select value={selectedAvaiMessageStore} onChange={this.handleAvaiMessageStoreSelectChange}>
                          <option value="SFMessageStore">Select From Message Stores</option>
                        </Form.Select>
                        <Form.Label className="MessageStore">Message Store</Form.Label>
                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The Message Store, in which messages will be stored. You can give the name of the Message Store either as a value or as an expression</Tooltip>}>
                          <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                          </span>
                        </OverlayTrigger>
                        <Form.Control type="text" placeholder="eg: None" /> 
                      </>  
                    )}
                    {selectedSpecifyAs === "Dynamic" && (
                      <>
                        <Form.Label className="DynReferenceKey">Dynamic Reference Key</Form.Label>
                        <Form.Control type="text" readOnly /> {/* When user click it going to the Expression Selector Model*/}
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
