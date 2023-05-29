import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Props = {
    onPropertyUpdate: (property: object) => void; // callback function to update properties in parent component
};
type State = {
    selectedLogCategory: string,
    selectedLogLevel: string,
    selectedPropertyValueType: string,
    showModal: boolean;
    propertyValueType: string;
    propertyValue: string;
    propertyName: string;
    inputDescription: string;
    };

export default class LogMediatorProperty extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        selectedLogCategory: 'INFO',
        selectedLogLevel: 'SIMPLE',
        selectedPropertyValueType: 'LITERAL',
        showModal: false,
        propertyName: '',
        propertyValueType: '',
        propertyValue: '',
        inputDescription: '',
    };
    this.handleInputDescriptionChange = this.handleInputDescriptionChange.bind(this);
}
handleLogCategorySelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedLogCategory: event.target.value });
  };
  handleLogLevelSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedLogLevel: event.target.value });
  };
  handlePropertyValueTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedPropertyValueType: event.target.value });
  };
  handleInputDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDescription = event.target.value;
    this.setState({ inputDescription });
  };
  handleShowModal = () => {
    this.setState({ showModal: true });
  };
  handleSave = () => {
    const { selectedLogCategory, selectedLogLevel, selectedPropertyValueType, propertyName, propertyValueType, propertyValue, inputDescription } = this.state;
    this.props.onPropertyUpdate({ logCategory: selectedLogCategory, logLevel: selectedLogLevel, description: inputDescription, name: propertyName, valueType: propertyValueType, value: propertyValue });
    // Do something with the selected values
  };

  handleHideModal = () => {
    this.setState({ showModal: false });
  };
  handleFinish = () => {
    const { propertyName, propertyValueType, propertyValue } = this.state;
    this.setState({ showModal: false });
  };

  handlePropertyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ propertyName: event.target.value });
  };
  handlePropertyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ propertyValue: event.target.value });
  };
  handlePropertyUpdate = (property: object) => {
    console.log('Property updated:', property);
    // handle property update logic here
  };
  
  
  render() {
    const { selectedLogCategory, selectedLogLevel, selectedPropertyValueType, showModal, propertyName, propertyValueType, propertyValue, inputDescription } = this.state;
    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Properties</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                        <Form.Label className='LogCategory'>Log Category</Form.Label>
                            <Form.Select value={selectedLogCategory} onChange={this.handleLogCategorySelectChange}>
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
                            <Form.Control as='textarea' style={{ minHeight: '100px' }} value={`Name: ${propertyName}\nValue Type: ${propertyValueType}\nValue: ${propertyValue}`} onClick={this.handleShowModal} />
                            <Form.Label className='Description'>Description</Form.Label>
                            <Form.Control as="textarea" placeholder='eg: None' value={this.state.inputDescription} onChange={this.handleInputDescriptionChange} />
                            
                            
                        </Form.Group>
                    </Form>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={this.handleHideModal}>Cancel</button>
                <button className='btn btn-primary' onClick={this.handleSave}>Save</button>
            </Modal.Footer>
            <Modal show={showModal} onHide={this.handleHideModal}>
                <Modal.Header closeButton>
                    <Modal.Title >LogProperty</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <Row className='mb-4'>
                  <form>
                    <Form.Group>
                      <p>Editing of the properties of an object LogProperty</p><br></br>
                      <Modal.Title >Properties</Modal.Title><br/>
                      <Form.Label className="PropertyName">Property Name</Form.Label>
                      <Form.Control type="text" placeholder=" " value={propertyName} onChange={this.handlePropertyNameChange} />
                      <Form.Label className="PropertyValueType">Property Value Type</Form.Label>
                      <Form.Select value={selectedPropertyValueType} onChange={this.handlePropertyValueTypeSelectChange}>
                        <option value="LITERAL">LITERAL</option>
                        <option value="EXPRESSION">EXPRESSION</option>
                        </Form.Select>
                  <Form.Label className="PropertyValue">Property Value</Form.Label>
                  <Form.Control type="text" placeholder=" " value={propertyValue} onChange={this.handlePropertyValueChange} />
                </Form.Group>
              </form>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={this.handleFinish}>Finish</button>
          <button className="btn btn-secondary" onClick={this.handleHideModal}>Cancel</button>
        </Modal.Footer>
    </Modal>
  </>
);
    }
}
