import React from 'react'
import {NavDropdown} from 'react-bootstrap'

const navDropdownItem = (props) => {
    return (
        <NavDropdown.Item href={props.href}>{props.children}</NavDropdown.Item>
    )
}

export default navDropdownItem