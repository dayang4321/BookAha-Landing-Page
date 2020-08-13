import React from 'react'
import {NavDropdown} from 'react-bootstrap'
import NavDropdownItem from './NavDropdownItem/NavDropdownItem'


const navDropdown = (props) => {
    return (
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdownItem href="#action/3.3">Something</NavDropdownItem>
            <NavDropdown.Divider />
            <NavDropdownItem href="#action/3.4">Separated link</NavDropdownItem>
        </NavDropdown>

    )
}


export default navDropdown

