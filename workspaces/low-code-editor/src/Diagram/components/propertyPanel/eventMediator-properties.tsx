import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedTopicType: string;
};

export default class EventMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedTopicType: "static"
        };
}
handleTopicTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedTopicType: event.target.value });
};

  render() {
    const { selectedTopicType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Event Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='TopicType'>Topic Type</Form.Label>
                            <Form.Select value={selectedTopicType} onChange={this.handleTopicTypeSelectChange}>
                                <option value="static">static</option>
                                <option value="dynamic">dynamic</option>
                            </Form.Select>
                            {selectedTopicType === "static" && (
                                <>
                                <Form.Label className='StaticTopic'>Static Topic</Form.Label>
                                <Form.Control type="text" placeholder='eg: static'/>
                                </>
                            )}
                            {selectedTopicType === "dynamic" && (
                                <>
                                <Form.Label className='DynamicTopic'>Dynamic Topic</Form.Label>
                                <Form.Control type="text" placeholder='eg: dynamic'/>
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