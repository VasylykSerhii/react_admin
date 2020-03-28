import React, {useState, useRef } from 'react'
import './dropDownMenu.scss'



function DropDownMenu(props) {
  const [setActive, setOpenToggle] = useState('')
  const [setHeight, setHeightToggle] = useState('0px')

  const content = useRef(null);

  const toggleActive = () => {
    setOpenToggle(setActive === '' ? 'active' : '')
    setHeightToggle(setActive === '' ? `${content.current.scrollHeight}px` : `0px`)
  }

  
  console.log(props);
  const isUser =  props.img ? "user" : '';
  
  
  return (
    <div className={`drop-down-menu ${isUser}`}>
      <div className={`drop-down-menu__name ${setActive} ${isUser}`} onClick={toggleActive}>
         {
           props.img ?
            <img src={props.img} alt=""/>
           : 
           <span className='drop-down-menu__icon'>{props.icon}</span>  
         }
        
        {props.name}
      </div>
      <div className='drop-down-menu__items' ref={content} style={{ maxHeight: `${setHeight}` }}>
      <span className='drop-down-menu__items-icon'>{props.children.icon}</span>  
        {props.children}
      </div>
    </div>
  )
}

export default DropDownMenu