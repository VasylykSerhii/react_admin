import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './menu.scss'
import DropDownMenu from '../dropDownMenu'
export default class Menu extends Component {
  render() {
    return (
      <nav>
        <DropDownMenu  name='Pages'>
          <Link to='/'>Hone</Link>
          <Link to='/about'>About</Link>
        </DropDownMenu>
 
      </nav>
    )
  }
}
