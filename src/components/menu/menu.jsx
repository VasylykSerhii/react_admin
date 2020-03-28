import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './menu.scss'
import DropDownMenu from '../dropDownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import PerfectScrollbar from 'react-perfect-scrollbar'


import 'react-perfect-scrollbar/dist/css/styles.css';
export default class Menu extends Component {
  render() {
    return (
      <nav>

        <PerfectScrollbar>
            <DropDownMenu  name='Admin' img='https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg'>
              <Link to='/'><span>MP</span> My Profile</Link>
              <Link to='/about'><span>EP</span>Edit Profile</Link>
              <Link to='/about'><span>S</span>Seting</Link>
            </DropDownMenu>


            <DropDownMenu  name='Pages' icon='PG'>
              <Link to='/'><span><FontAwesomeIcon icon={faHome} /></span>   Hone</Link>
              <Link to='/about'><span>A</span>About</Link>
              <DropDownMenu  name='Pages' icon='PG'>
                <Link to='/'><span><FontAwesomeIcon icon={faHome} /></span>   Hone</Link>
                <Link to='/about'><span>A</span>About</Link>
              </DropDownMenu>
            </DropDownMenu>
            
            
        </PerfectScrollbar>
        </nav>

    )
  }
}
