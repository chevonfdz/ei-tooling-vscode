import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
  selectedAvailableTemplates: string,
};

export default class CallTemplateMediatorProperty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        selectedAvailableTemplates: 'SelectFromTemplates',
    };
  }
  handleAvailableTemplatesSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedAvailableTemplates: event.target.value });
  };
  
  render() {
    const { selectedAvailableTemplates } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Call Template Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='AvailableTemplates'>Available Templates</Form.Label>
                            <Form.Select value={selectedAvailableTemplates} onChange={this.handleAvailableTemplatesSelectChange}>
                                <option value="SelectFromTemplates">Select From Templates</option>
                            </Form.Select>
                            <Form.Label className='ParameterName'>Parameter Name</Form.Label>
                            {/* When a user clicks this textbox, the CallTemplateParameter Model appears.*/}
                            <Form.Control as='textarea' style={{ minHeight: '100px' }} readOnly />
                            <Form.Label className="TargetProperty">Target Property</Form.Label>
                            <Form.Control type="text" placeholder="eg: None" />
                            <Form.Label className="OnError">OnError</Form.Label>
                            {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                            <Form.Control type="text" readOnly />
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
