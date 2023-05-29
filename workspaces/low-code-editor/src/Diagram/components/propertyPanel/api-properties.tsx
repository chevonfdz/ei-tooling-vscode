import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedVersionType: string;

};

export default class ApiProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedVersionType: "none",
        }; 
    }
    handleVersionTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedVersionType: event.target.value });
    };

  render() {
    const { selectedVersionType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>API Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                      Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="Name"><b>Name</b></Form.Label>
                            <Form.Control type="text" placeholder="eg: Name" />
                            <Form.Label className="Context"><b>Context</b></Form.Label>
                            <Form.Control type="text" placeholder="eg: /Name" />
                            <Form.Label className="PublishSwagger">PublishSwagger</Form.Label>
                            <Form.Control type="text" readOnly />
                            <Form.Label className="HostName">Host Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: Host Name" />
                            <Form.Label className="Context">Port</Form.Label>
                            <Form.Control type="text" placeholder="eg: 0" />
                            <Form.Label className='VersionType'>Version Type</Form.Label>
                            <Form.Select value={selectedVersionType} onChange={this.handleVersionTypeSelectChange}>
                                <option value="none">none</option>
                                <option value="context">context</option>
                                <option value="url">url</option>
                            </Form.Select>
                            {selectedVersionType !== "none" && (
                            <div>
                                <Form.Label className="Version">Version</Form.Label>
                                <Form.Control type="text" placeholder="eg: Version" />
                            </div>
                            )}
                            <br/>
                            <Form.Check type="checkbox" className="TraceEnabled" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Trace Enabled</span>}/>
                            <Form.Check type="checkbox" className="StatisticsEnabled" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Statistics Enabled</span>}/>
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
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Handler
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='APIHandlers'>API Handlers</Form.Label>
                            {/* When a user clicks this textbox, the Handler Model appears.*/}
                            <Form.Control as='textarea' readOnly/>
                        </Form.Group>
                    </Form>
                </Row>
            </Modal.Body>
        </> 
    )
  }
}