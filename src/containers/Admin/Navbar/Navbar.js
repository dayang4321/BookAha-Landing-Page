import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'


const MyNavbar = (props) => {

    return (
        <Navbar fixed="top" className="shadow px-0" collapseOnSelect expand="md" bg="dark" variant="dark" >
  <Navbar.Brand className="col-md-3 col-lg-2 mr-0" href="#">ParcHost</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
     */}
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link className="px-3" eventKey={2} href="/logout">
              Sign out               
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default MyNavbar;