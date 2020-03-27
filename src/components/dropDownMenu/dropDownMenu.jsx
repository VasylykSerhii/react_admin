import React, { Component } from 'react'
import './dropDownMenu.scss'
// import { Collapse } from '@material-ui/core'

// import Collapse from 'react-bootstrap/Collapse'



export default class DropDownMenu extends Component {
  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen,
    }))
  }


  render() {
    const openCls = this.state.isOpen ? 'open' : ''

    return (
      <div className={'drop-down-menu ' + openCls}>
      <div className='drop-down-menu__name' onClick={this.toggleOpen}>{this.props.name}</div>
         <div className='drop-down-menu__items'>
           {this.props.children}
         </div>
      </div>
    )
  }
}



{/* <div className='drop-down-menu'>
<div className='drop-down-menu__name' onClick={this.toggleOpen}>{this.props.name}</div>
 <Collapse in={this.state.isOpen}  >
   <div className='drop-down-menu__items'>
   {this.props.children}
   </div>
  </Collapse>
</div> */}
