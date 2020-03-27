import React, { Component, useState } from 'react'


export default class DropDownMenu extends Component {
  state = {
    isOpen: true
  }

  toggleOpen = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
    let dropDownItems
    if(this.state.isOpen){
       dropDownItems = <div>
        {this.props.children}
      </div>
    }

    return (
      <div>
        <div onClick={this.toggleOpen}>{this.props.name}</div>
        {
          dropDownItems
        }
      </div>
    )
  }
}
