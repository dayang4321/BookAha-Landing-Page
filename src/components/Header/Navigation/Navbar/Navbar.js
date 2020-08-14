import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../UI/Logo/logo.svg'
import NavDropdown from './NavDropdown/NavDropdown'
import Button from '../../../UI/Button/Button'

import './Navbar.css'


const MainNavbar = (props) => {

  const [navState, setNavState] = useState("");

  const toggleNav = () => {
   return setNavState(navState==="expanded"?"":"expanded")
  }



    return (
        <Navbar className={navState + " p-xl-5 p-lg-4 p-md-2 p-sm-3 p-2"} collapseOnSelect expand="md" onToggle={toggleNav} variant="dark">
            <Navbar.Brand href="#" className="px-xl-5 px-lg-3 px-0"> <img src={logo} className="navbar-logo img-fluid" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="px-xl-4 px-lg-3 px-md-0 px-0" id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link className="px-xl-4 px-lg-3 px-2 py-3 py-md" href="#features">About BookAha</Nav.Link>
                    <Nav.Link className="px-xl-4 px-lg-3 px-2 py-3 py-md" href="#pricing">SignUp</Nav.Link>
                </Nav>
                <NavDropdown/>
                  <Nav>
                    <Button btnText="Download App"/>
                  </Nav>
                </Navbar.Collapse>
        </Navbar>

    )
}


export default MainNavbar
