import React, { Component } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import './PropertyDialog.css'
import ApiPropertyDialog from '../api-property-dialog/ApiPropertyDialog'
import ResourcePropertyDialog from '../resource-property-dialog/ResourcePropertyDialog'

export enum PropertyDialogTypes {
    API_PROPERTY_DIALOG, RESOURCE_PROPERTY_DIALOG
}

type Props = {
    toggleToClose: () => void,
    dialogType: PropertyDialogTypes
    // setDialogType: (dialogType: PropertyDialogTypes) => void
}

type State = {
    show: boolean,
    dialogType: PropertyDialogTypes
}

export default class PropertyDialog extends Component<Props, State> {
  state = {
    show: true,
    dialogType: PropertyDialogTypes.RESOURCE_PROPERTY_DIALOG
  }

  handleClose = () => {
    this.setState({show:false});
    this.props.toggleToClose();
  }
  handleShow = () => this.setState({show:true});

  render() {
    return (
      <Modal 
        show={this.state.show} 
        id='mymodal' 
        onHide={this.handleClose}>

        { (this.props.dialogType == PropertyDialogTypes.API_PROPERTY_DIALOG) && <ApiPropertyDialog /> }
        { (this.props.dialogType == PropertyDialogTypes.RESOURCE_PROPERTY_DIALOG) && <ResourcePropertyDialog /> }

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}