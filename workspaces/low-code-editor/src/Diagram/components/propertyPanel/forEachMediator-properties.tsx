import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedSequenceType: string;
};

export default class ForEachMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedSequenceType: "Anonymous",
        };
}
handleSequenceTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedSequenceType: event.target.value });
};
  render() {
    const { selectedSequenceType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Iterate Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>    
                            <Form.Label className="ForEachID">ForEach ID</Form.Label>
                            <Form.Control type="text" placeholder="eg: ForEach ID" />
                            <Form.Label className="ForEachExpression">ForEach Expression</Form.Label>
                            {/* When a user clicks this textbox, the Expression Selector Model appears.*/}
                            <Form.Control type="text" placeholder="eg: Iterate Expression" />
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
                < br/ >
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Sequence
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="SequenceType">Sequence Type</Form.Label>
                            <Form.Select value={selectedSequenceType} onChange={this.handleSequenceTypeSelectChange}>
                                <option value="Anonymous">Anonymous</option>
                                <option value="RegistryReference">Registry Reference</option>
                                <option value="NamedReference">Named Reference</option>
                            </Form.Select>
                            {selectedSequenceType === "RegistryReference" && (
                                <>
                                    <Form.Label className="SequenceKey">Sequence Key</Form.Label>
                                    {/* When a user clicks this textbox, the Resource KeyModel appears.*/}
                                    <Form.Control type="text" readOnly />
                                </>
                            )}
                            {selectedSequenceType === "NamedReference" && (
                                <>
                                    <Form.Label className="SequenceName">Sequence Name</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Sequence Name" />
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