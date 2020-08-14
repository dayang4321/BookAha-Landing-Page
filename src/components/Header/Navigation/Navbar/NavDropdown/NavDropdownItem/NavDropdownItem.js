import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import RoundFlag from '../../../../../UI/RoundFlag/RoundFlag'

const navDropdownItem = (props) => {
    return (
        <NavDropdown.Item id={props.id}
            onClick={()=>props.clicked(props.menuText, props.imgSrc)}
            href={props.href}>
            <RoundFlag imgSrc={props.imgSrc} />
            <span>
            {props.menuText}
            </span>
          
        </NavDropdown.Item>
    )
}

export default navDropdownItem