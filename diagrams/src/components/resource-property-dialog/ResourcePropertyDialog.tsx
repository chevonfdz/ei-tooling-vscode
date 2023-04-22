import React, { Component } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'

type Props = {}

type State = {}

export default class ResourcePropertyDialog extends Component<Props, State> {
  state = {}

  render() {
    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Properties</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Basic
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>URL Style</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label>Protocol</Form.Label>
                            <Form.Control type='text' placeholder='eg: https' />
                        </Form.Group>
                    </Form>
                </Row>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Methods
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Check type='checkbox' label='GET' />
                                    <Form.Check type='checkbox' label='POST' />
                                </Col>
                                <Col>
                                    <Form.Check type='checkbox' label='DELETE' />
                                    <Form.Check type='checkbox' label='OPTIONS' />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        InSequence
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>InSequence Type</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                        </Form.Group>
                    </Form>
                </Row>
                
            </Modal.Body>
        </>
    )
  }
}