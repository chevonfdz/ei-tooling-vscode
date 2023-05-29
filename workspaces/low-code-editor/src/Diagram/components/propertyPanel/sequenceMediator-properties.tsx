import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
  selectedRSType: string
};

export default class SequenceMediatorProperty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedRSType: 'Static'
    };
}

handleRSTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedRSType: event.target.value });
};
   
  render() {
    const { selectedRSType } = this.state;


    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Sequence Mediator Properties</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className='mb-4'>
                <Modal.Title className='text-secondary'>
                    Properties
                </Modal.Title>
                <Form>
                  <Form.Group>
                    <br/>
                  </Form.Group>
                </Form>
              </Row>      
              <Row className='mb-4'>
                <Modal.Title className='text-secondary'>
                    Referring Sequence
                </Modal.Title>
                <Form>
                  <Form.Group>
                    <Form.Label className='RSType'>Referring Sequence Type</Form.Label>
                    <Form.Select value={selectedRSType} onChange={this.handleRSTypeSelectChange}>
                      <option value="Static">Static</option>
                      <option value="Dynamic">Dynamic</option>
                    </Form.Select>
                    {selectedRSType === "Static" && (
                      <>
                        <Form.Label className="StaReferenceKey">Static Reference Key</Form.Label>
                        <Form.Control type="text" readOnly /> {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                      </>
                    )}
                    {selectedRSType === "Dynamic" && (
                      <>
                        <Form.Label className="DynReferenceKey">Dynamic Reference Key</Form.Label>
                        <Form.Control type="text" readOnly /> {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
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
