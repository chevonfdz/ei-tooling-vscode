import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
  selectedVersionType: string,
  selectedLogLevel: string,
};

export default class LogMediatorProperty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        selectedVersionType: 'INFO',
        selectedLogLevel: 'SIMPLE',
    };
}
  handleVersionTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedVersionType: event.target.value });
  };
  handleLogLevelSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedLogLevel: event.target.value });
  };

  render() {
    const { selectedVersionType, selectedLogLevel } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Log Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='VersionType'>Version Type</Form.Label>
                            <Form.Select value={selectedVersionType} onChange={this.handleVersionTypeSelectChange}>
                                <option value="INFO">INFO</option>
                                <option value="TRACE">TRACE</option>
                                <option value="DEBUG">DEBUG</option>
                                <option value="WARN">WARN</option>
                                <option value="ERROR">ERROR</option>
                                <option value="FATAL">FATAL</option>
                            </Form.Select>
                            <Form.Label className='LogLevel'>Log Level</Form.Label>
                            <Form.Select value={selectedLogLevel} onChange={this.handleLogLevelSelectChange}>
                                <option value="SIMPLE">SIMPLE</option>
                                <option value="HEADERS">HEADERS</option>
                                <option value="FULL">FULL</option>
                                <option value="CUSTOM">CUSTOM</option>
                            </Form.Select>
                            <Form.Label className='LogSeparator'>Log Separator</Form.Label>
                            <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">This parameter is used to specify a value to be used in the log to separate attributes. The comma is default. Can be add tab as "/t" and new line as "/n"</Tooltip>}>
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                              </OverlayTrigger>
                            <Form.Control type='text' placeholder=' ' />
                            <Form.Label className='Properties'>Properties</Form.Label>
                            {/* When a user clicks this textbox, the LogProperty Model appears.*/}
                            <Form.Control as='textarea' readOnly />
                        </Form.Group>
                    </Form>
                </Row>
            </Modal.Body>
        </>
    )
  }
}
