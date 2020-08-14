import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../UI/Logo/logo.svg'
import NavSelect from './NavSelect/NavSelect'
import Button from '../../../UI/Button/Button'

import './Navbar.css'


const navbar = (props) => {
    return (
        <Navbar className="p-5" collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand href="#home" className="px-5"> <img src={logo} className="navbar-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link className="px-4" href="#features">About BookAha</Nav.Link>
                    <Nav.Link className="px-4" href="#pricing">SignUp</Nav.Link>
                </Nav>
                <NavSelect/>
                  <Nav>
                    <Button btnText="Download App"/>
                  </Nav>
                </Navbar.Collapse>
        </Navbar>

    )
}


export default navbar
