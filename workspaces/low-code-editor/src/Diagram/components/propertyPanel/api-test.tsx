import React, { Component } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

type Props = {};

type State = {
  selectedOption: string;
  handlerClasses: { className: string; properties: string[] }[];
  newClassName: string;
  newProperty: string;
};

export default class ApiProperty extends Component<Props, State> {
  state: State = {
    selectedOption: 'none',
    handlerClasses: [],
    newClassName: '',
    newProperty: '',
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleAddClass = () => {
    const { handlerClasses, newClassName } = this.state;
    const newClass = { className: newClassName, properties: [] };
    this.setState({
      handlerClasses: [...handlerClasses, newClass],
      newClassName: '',
    });
  };

  handleRemoveClass = (index: number) => {
    const { handlerClasses } = this.state;
    const updatedHandlerClasses = handlerClasses.filter(
      (_, i) => i !== index
    );
    this.setState({ handlerClasses: updatedHandlerClasses });
  };

  handleAddProperty = (classIndex: number) => {
    const { handlerClasses, newProperty } = this.state;
    const updatedClassProperties = [
      ...handlerClasses[classIndex].properties,
      newProperty,
    ];
    const updatedHandlerClasses = [...handlerClasses];
    updatedHandlerClasses[classIndex].properties = updatedClassProperties;
    this.setState({
      handlerClasses: updatedHandlerClasses,
      newProperty: '',
    });
  };

  handleRemoveProperty = (classIndex: number, propertyIndex: number) => {
    const { handlerClasses } = this.state;
    const updatedClassProperties = handlerClasses[classIndex].properties.filter(
      (_, i) => i !== propertyIndex
    );
    const updatedHandlerClasses = [...handlerClasses];
    updatedHandlerClasses[classIndex].properties = updatedClassProperties;
    this.setState({ handlerClasses: updatedHandlerClasses });
  };

  render() {
    const { selectedOption, handlerClasses, newClassName, newProperty } =
      this.state;

    return (
      <>
        <Modal.Header>
          <Modal.Title className='text-primary'>Properties</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='mb-4'>
            <Modal.Title className='text-secondary'>API Properties</Modal.Title>
            <Form>
              <Form.Group>
                <Form.Select
                  value={selectedOption}
                  onChange={this.handleSelectChange}
                >
                  <option value='none'>none</option>
                  <option value='url'>url</option>
                </Form.Select>
                {selectedOption !== 'none' && (
                  <div>
                    <Form.Label className='Version'>Version</Form.Label>
                    <Form.Control type='text' placeholder='eg: None' />
                  </div>
                )}
              </Form.Group>
            </Form>
          </Row>
          <Row className='mb-4'>
            <Modal.Title className='text-secondary'>Handler</Modal.Title>
            <Col>
              <Form>
                <Form.Group as={Row}>
                  <Col sm={4}>
                    <Form.Control
                      type='text'
                      placeholder='Class name'
                      value={newClassName}
                      onChange={(e) =>
                        this.setState({ newClassName: e.target.value })
                      }
                    />
                  </Col>
                  <Col sm={4}>
                    <Button
                      variant='primary'
                      onClick={this.handleAddClass}
>
Add Class
</Button>
</Col>
</Form.Group>
{handlerClasses.map((classObj, classIndex) => (
<Form.Group key={classIndex} as={Row}>
<Col sm={4}>
<Form.Label>Class {classIndex + 1}</Form.Label>
<Form.Control type='text' value={classObj.className} disabled />
</Col>
<Col sm={4}>
<Button
variant='danger'
onClick={() => this.handleRemoveClass(classIndex)}
>
Remove Class
</Button>
</Col>
<Col sm={4}>
<Form.Control
type='text'
placeholder='Add property'
value={newProperty}
onChange={(e) =>
this.setState({ newProperty: e.target.value })
}
/>
<Button
variant='primary'
onClick={() => this.handleAddProperty(classIndex)}
>
Add Property
</Button>
</Col>
<Col sm={8}>
<ul>
{classObj.properties.map((property, propertyIndex) => (
<li key={propertyIndex}>
{property}
<Button
variant='danger'
size='sm'
className='ms-2'
onClick={() =>
this.handleRemoveProperty(
classIndex,
propertyIndex
)
}
>
X
</Button>
</li>
))}
</ul>
</Col>
</Form.Group>
))}
</Form>
</Col>
</Row>
</Modal.Body>
</>
);
}
}





