import React, { Component } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'

type Props = {}

type State = {
    selectedURLStyleType: string,
    selectedProtocolType: string,
    selectedInSequenceType: string,
    selectedOutSequenceType: string,
    selectedFaultSequenceType: string,
  }
export default class ResourceProperty extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedURLStyleType: 'None',
            selectedProtocolType: 'http-https',
            selectedInSequenceType: 'Anonymous',
            selectedOutSequenceType: 'Anonymous',
            selectedFaultSequenceType: 'Anonymous',
        };
    }
    handleURLStyleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedURLStyleType: event.target.value,
        });
      }
    handleProtocolSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedProtocolType: event.target.value,
        });
    }
    handleInSequenceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedInSequenceType: event.target.value,
        });
      }
    handleOutSequenceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedOutSequenceType: event.target.value,
        });
      }
    handleFaultSequenceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedFaultSequenceType: event.target.value,
        });
      }

    render() {
        const { selectedURLStyleType, selectedProtocolType, selectedInSequenceType, selectedOutSequenceType, selectedFaultSequenceType } = this.state

        return (
            <>
                <Modal.Header>
                    <Modal.Title className='text-primary'>API Resource Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Basic
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label className="UrlStyle">Url Style</Form.Label>
                                <Form.Select value={selectedURLStyleType} onChange={this.handleURLStyleSelectChange}>
                                    <option value="None">None</option>
                                    <option value="URLTEMPLATE">URL_TEMPLATE</option>
                                    <option value="URLMAPPING">URL_MAPPING</option>
                                </Form.Select>
                                {selectedURLStyleType === "URLTEMPLATE" && (
                                    <>
                                        <Form.Label className="URL-TEMPLATE">URL-TEMPLATE</Form.Label>
                                        <Form.Control type="text" placeholder="eg: None" />
                                    </>
                                )}
                                {selectedURLStyleType === "URLMAPPING" && (
                                    <>
                                        <Form.Label className="URL-MAPPING">URL-MAPPING</Form.Label>
                                        <Form.Control type="text" placeholder="eg: None" />
                                    </>
                                )}
                                <Form.Label>Protocol</Form.Label>
                                <Form.Select value={selectedProtocolType} onChange={this.handleProtocolSelectChange}>
                                    <option value="http-https">http,https</option>
                                    <option value="URLTEMPLATE">https</option>
                                    <option value="URLMAPPING">http</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Row>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            Methods
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Check type="checkbox" className="GET" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>GET</span>}/>
                                        <Form.Check type="checkbox" className="POST" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>POST</span>}/>
                                    </Col>    
                                    <Col>
                                        <Form.Check type="checkbox" className="Put" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Put</span>}/>
                                        <Form.Check type="checkbox" className="Delete" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Delete</span>}/>
                                    </Col>
                                    <Col>
                                        <Form.Check type="checkbox" className="Options" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Options</span>}/>
                                        <Form.Check type="checkbox" className="Head" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Head</span>}/>
                                    </Col>
                                    <Col>
                                        <Form.Check type="checkbox" className="Patch" style={{ display: "flex", alignItems: "center" }} label={<span style={{ marginLeft: "10px" }}>Patch</span>}/>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Row>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            InSequence
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label className="InSequenceType">In Sequence Type</Form.Label>
                                <Form.Select value={selectedInSequenceType} onChange={this.handleInSequenceSelectChange}>
                                    <option value="Anonymous">Anonymous</option>
                                    <option value="RegistryReference">Registry Reference</option>
                                    <option value="NameReference">Name Reference</option>
                                </Form.Select>
                                {selectedInSequenceType === "RegistryReference" && (
                                    <>
                                        <Form.Label className="InSequenceKey">In Sequence Key</Form.Label>
                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                        <Form.Control type="text" readOnly />
                                    </>
                                )}
                                {selectedInSequenceType === "NameReference" && (
                                    <>
                                        <Form.Label className="InSequenceName">In Sequence Name</Form.Label>
                                        <Form.Control type="text" placeholder="eg: In Sequence Name " />
                                    </>
                                )}   
                            </Form.Group>
                        </Form>
                    </Row>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            OutSequence
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Out Sequence Type</Form.Label>
                                <Form.Select value={selectedOutSequenceType} onChange={this.handleOutSequenceSelectChange}>
                                    <option value="Anonymous">Anonymous</option>
                                    <option value="RegistryReference">Registry Reference</option>
                                    <option value="NameReference">Name Reference</option>
                                </Form.Select>
                                {selectedOutSequenceType === "RegistryReference" && (
                                    <>
                                        <Form.Label className="OutSequenceKey">Out Sequence Key</Form.Label>
                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                        <Form.Control type="text" readOnly />
                                    </>
                                )}
                                {selectedOutSequenceType === "NameReference" && (
                                    <>
                                        <Form.Label className="OutSequenceName">Out Sequence Name</Form.Label>
                                        <Form.Control type="text" placeholder="eg: Out Sequence Name" />
                                    </>
                                )}
                            </Form.Group>
                        </Form>
                    </Row>
                    <br />
                    <Row className='mb-4'>
                        <Modal.Title className='text-secondary'>
                            FaultSequence
                        </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Fault Sequence Type</Form.Label>
                                <Form.Select value={selectedFaultSequenceType} onChange={this.handleFaultSequenceSelectChange}>
                                    <option value="Anonymous">Anonymous</option>
                                    <option value="RegistryReference">Registry Reference</option>
                                    <option value="NameReference">Name Reference</option>
                                </Form.Select>
                                {selectedFaultSequenceType === "RegistryReference" && (
                                    <>
                                        <Form.Label className="FaultSequenceKey">Fault Sequence Key</Form.Label>
                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                        <Form.Control type="text" readOnly />
                                    </>
                                )}
                                {selectedFaultSequenceType === "NameReference" && (
                                    <>
                                        <Form.Label className="FaultSequenceName">Fault Sequence Name</Form.Label>
                                        <Form.Control type="text" placeholder="eg: Fault Sequence Name" />
                                    </>
                                )}
                            </Form.Group>     
                        </Form>
                    </Row>
                </Modal.Body>
            </>
        )
    }
}
