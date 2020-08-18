import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import RoundFlag from '../../../../../UI/RoundFlag/RoundFlag'

import './NavDropdownItem.css'

const navDropdownItem = (props) => {
    return (
        <NavDropdown.Item id={props.id} 
            className={props.onDisplay===props.menuText?"d-none ": " mx-auto"}
            onClick={()=>props.clicked(props.menuText, props.imgSrc, props.lang)}
            href={props.href}>
            <RoundFlag imgSrc={props.imgSrc} />
            <span>
            {props.menuText}
            </span>
          
        </NavDropdown.Item>
    )
}

export default navDropdownItem