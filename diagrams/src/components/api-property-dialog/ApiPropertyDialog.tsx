import React, { Component } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'
{/* Have to make this Handler part line 66-70*/}

type Props = {}

type State = {
  selectedOption: string,
}

export default class ApiProperty extends Component<Props, State> {
  state: State = {
    selectedOption: 'none',
  }

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOption: event.target.value })
  }

  render() {
    const { selectedOption } = this.state

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Properties</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        API Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='Name'>Name</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='Context'>Context</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='PublishSwagger'>PublishSwagger</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='HostName'>Host Name</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='Port'>Port</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='VersionType'>Version Type</Form.Label>
                            <Form.Select value={selectedOption} onChange={this.handleSelectChange}>
                                <option value="none">none</option>
                                <option value="context">context</option>
                                <option value="url">url</option>
                            </Form.Select>
                            {selectedOption !== "none" && (
                            <div>
                                <Form.Label className="Version">Version</Form.Label>
                                <Form.Control type="text" placeholder="eg: None" />
                            </div>
                            )}
                            <br/>
                            <Form.Check type="checkbox" className="TraceEnabled" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Trace Enabled</span>}/>
                            <Form.Check type="checkbox" className="StatisticsEnabled" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Statistics Enabled</span>}/>
                            <Form.Label className='mt-2 mb-0'>Description</Form.Label>
                            <Form.Control as="textarea" placeholder='eg: None'/>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Handler
                    </Modal.Title>
                </Row>
            </Modal.Body>
        </>
    )
  }
}