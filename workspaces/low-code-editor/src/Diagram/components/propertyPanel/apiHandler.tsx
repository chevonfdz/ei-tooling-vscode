import React, { Component } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

type Props = {
    onHandlerPropertiesSave: (handlerProperties: string) => void;
};
type State = {
  selectedOption: string;
  showHandlerModal: boolean;
  showHandlerPropertyModal: boolean;
  handlerPropertyName: string;
  handlerPropertyValue: string;
};

export default class ApiHandler extends Component<Props, State> {
  state: State = {
    selectedOption: 'none',
    showHandlerModal: false,
    showHandlerPropertyModal: false,
    handlerPropertyName: '',
  handlerPropertyValue: ''
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOption: event.target.value });
  };
  

  handleShowHandlerModal = () => {
    this.setState({ showHandlerModal: true });
  };

  handleHideHandlerModal = () => {
    this.setState({ showHandlerModal: false });
  };

  handleShowHandlerPropertyModal = () => {
    this.setState({ showHandlerPropertyModal: true });
  };

  handleHideHandlerPropertyModal = () => {
    this.setState({ showHandlerPropertyModal: false });
  };

  // Update state variables when user enters handler property name or value
  handleHandlerPropertyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ handlerPropertyName: event.target.value });
  };
  
  handleHandlerPropertyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ handlerPropertyValue: event.target.value });
  };
  
  
  // Save entered values and update Form.Control when user clicks save button
  handleSaveHandlerProperties = () => {
    const { handlerPropertyName, handlerPropertyValue } = this.state;
    const updatedHandlerProperties = `${handlerPropertyName}: ${handlerPropertyValue}`;
    this.setState({ selectedOption: updatedHandlerProperties });
    this.props.onHandlerPropertiesSave(updatedHandlerProperties); // Pass updated value to parent component
    this.handleHideHandlerPropertyModal();
  };
  
  
  
  

  handleSave = () => {};

  render() {
    const {
      selectedOption,
      showHandlerModal,
      showHandlerPropertyModal,
    } = this.state;
    return (
      <>
        <Modal.Header>
          <Modal.Title className="text-primary">Properties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-4">
            <Modal.Title className="text-secondary">Handler</Modal.Title>
            <Form.Label className="APIHandlers">API Handlers</Form.Label>
            <Form.Control
              as="textarea"
              style={{ minHeight: '100px' }}
              placeholder=" "
              onClick={this.handleShowHandlerModal}
            />
          </Row>
        </Modal.Body>
        <Modal show={showHandlerModal} onHide={this.handleHideHandlerModal}>
          <Modal.Header closeButton>
            <Modal.Title>APIHandler</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-4">
              <form>
                <Form.Group>
                  <p>Editing of the properties of an object APIHandler</p>
                  <hr />
                  <h4>Properties</h4>
                  <Form.Label className="ClassName">Class Name</Form.Label>
                  <Form.Control type="text" placeholder=" " />
                    <Form.Label className="HandlerProperties">Properties</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ minHeight: '100px' }}
                    placeholder=" "
                    onClick={this.handleShowHandlerPropertyModal} value={this.state.selectedOption} readOnly/>
                </Form.Group>
              </form>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={this.handleHideHandlerModal}>Cancel</button>
            <button className="btn btn-primary" onClick={this.handleSave}>Finish</button>
          </Modal.Footer>
        </Modal>
        <Modal show={showHandlerPropertyModal} onHide={this.handleHideHandlerPropertyModal}>
          <Modal.Header closeButton>
            <Modal.Title>APIHandlerProperty</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className='mb-4'>
                  <form>
                  <Form.Group controlId="handlerPropertyName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={this.state.handlerPropertyName} onChange={this.handleHandlerPropertyNameChange} />
          </Form.Group>
          <Form.Group controlId="handlerPropertyValue">
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" placeholder="Enter value" value={this.state.handlerPropertyValue} onChange={this.handleHandlerPropertyValueChange} />
          </Form.Group>
                  </form>
                </Row>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={this.handleHideHandlerPropertyModal}>Cancel</button>
            <button className="btn btn-primary" onClick={this.handleSaveHandlerProperties}>Finish</button>
          </Modal.Footer>
        </Modal>
        </>
    )
  }
}
//I need to save APIHandlerProperty Model "(handleHandlerPropertiesSave)", input data of Name and Value in the APIHandler Model given textarea when i click on the save button. It will be save as "API Handler Property (Name: Value)". Likewise user can add many API Handler Property in the API Handler Model line by line.