import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import './ContextMenu.css'

type Props = {}

type State = {}

export default class ContextMenu extends Component<Props, State> {
  state = {}

// CustomContextMenuItem: React.ForwardRefExoticComponent<React.RefAttributes<typeof Dropdown.Item>> = React.forwardRef(() => (
  //   <a>
  //     {children}
  //     hello
  //   </a>
  // ));

  render() {
    return (
      <Dropdown>
        <Dropdown.Menu show variant='dark'>
          <Dropdown.Header>Mediators</Dropdown.Header>
          <Dropdown.Divider color='#a0a3a8' />
          <Dropdown.Item>ConditionalRouter</Dropdown.Item>
          <Dropdown.Item>Call</Dropdown.Item>
          <Dropdown.Item>CallTemplate</Dropdown.Item>
          <Dropdown.Item>Drop</Dropdown.Item>
          <Dropdown.Item>Log</Dropdown.Item>
          <Dropdown.Item>LoopBack</Dropdown.Item>
          <Dropdown.Item>Property</Dropdown.Item>
          <Dropdown.Item>PropertyGroup</Dropdown.Item>
          <Dropdown.Item>Respond</Dropdown.Item>
          <Dropdown.Item>Send</Dropdown.Item>
          <Dropdown.Item>Sequence</Dropdown.Item>
          <Dropdown.Item>Store</Dropdown.Item>
          <Dropdown.Divider color='#a0a3a8' />
          <Dropdown.Item>ConditionalRouter</Dropdown.Item>
          <Dropdown.Item>Filter</Dropdown.Item>
          <Dropdown.Item>Switch</Dropdown.Item>
          <Dropdown.Item>Validate</Dropdown.Item>
          <Dropdown.Divider color='#a0a3a8' />
          <Dropdown.Item>Bean</Dropdown.Item>
          <Dropdown.Item>Class</Dropdown.Item>
          <Dropdown.Item>Command</Dropdown.Item>
          <Dropdown.Item>EJB</Dropdown.Item>
          <Dropdown.Item>Script</Dropdown.Item>
          <Dropdown.Item>Spring</Dropdown.Item>
          <Dropdown.Divider color='#a0a3a8' />
          <Dropdown.Item>Enrich</Dropdown.Item>
          <Dropdown.Item>Fault</Dropdown.Item>
          <Dropdown.Item>Header</Dropdown.Item>
          <Dropdown.Item>PayloadFactory</Dropdown.Item>
          <Dropdown.Item>Smooks</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      // <div id='context-menu'>
      //   <div className='context-menu-item context-menu-title'>
      //     Mediators
      //   </div>
      //   <div className='context-menu-item context-menu-strip'>
      //     Call
      //   </div>
      //   <div className='context-menu-item context-menu-strip'>
      //     Drop
      //   </div>
      //   <div className='context-menu-item context-menu-strip'>
      //     Log
      //   </div>
      //   <div className='context-menu-item context-menu-strip'>
      //     Switch
      //   </div>
      // </div>
    )
  }
}