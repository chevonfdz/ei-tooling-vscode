import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedAction: string;
};

export default class TransactionMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedAction: "Commit transaction"
};
}
handleActionSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedAction: event.target.value });
};

  render() {
    const { selectedAction } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Transaction Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group> 
                            <Form.Label className="Action">Action</Form.Label> 
                            <Form.Select value={selectedAction} onChange={this.handleActionSelectChange}>
                                <option value="Action1">Commit transaction</option>
                                <option value="Action2">Fault if no transaction</option>
                                <option value="Action3">Initiate new transaction</option>
                                <option value="Action4">Resume transaction</option>
                                <option value="Action5">Suspend transaction</option>
                                <option value="Action6">Rollback transaction</option>
                                <option value="Action7">Use existing or initiate transaction</option>
                            </Form.Select>
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
