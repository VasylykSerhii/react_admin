import React, { Component } from 'react'

import Menu from "../menu";
import './sidebar.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className="sidebar__logo">
          <span className='sidebar__icon'>DS</span>
          Dark Shop
        </div>
        <div className="sidebar__user">
          
        </div>
        <Menu />
      </div>
    )
  }
}
