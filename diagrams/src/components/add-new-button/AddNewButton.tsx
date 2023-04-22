import React, { Component } from 'react'
import { Button, OverlayTrigger, Popover, Row } from 'react-bootstrap'
import ContextMenu from '../context-menu/ContextMenu'
import './AddNewButton.css'
import PropertyDialog, { PropertyDialogTypes } from '../property-dialog/PropertyDialog'

type Props = {}

type State = {
  showDialog: boolean,
  propDialogType: PropertyDialogTypes
}

export default class AddNewButton extends Component<Props, State> {
  state = {
    showDialog: false,
    propDialogType: PropertyDialogTypes.API_PROPERTY_DIALOG
  }

  popover: JSX.Element = (
    <Popover id="popover-basic">
      <ContextMenu />
    </Popover>
  );

  render() {
    return (
      <Row>
        <OverlayTrigger rootClose trigger="click" placement="auto-start" overlay={this.popover}>
            <div className='add-new-button'>+</div>
        </OverlayTrigger>

        <Button onClick={() => {
          this.setState({propDialogType: PropertyDialogTypes.API_PROPERTY_DIALOG})
          this.setState({showDialog: true});
        }}>Test API</Button>
        
        <Button onClick={() => {
          this.setState({propDialogType: PropertyDialogTypes.RESOURCE_PROPERTY_DIALOG})
          this.setState({showDialog: true});
        }}>Test Resource</Button>

        { this.state.showDialog && <PropertyDialog toggleToClose={() => this.setState({showDialog: false})} dialogType={this.state.propDialogType} />}
      </Row>
    )
  }
}