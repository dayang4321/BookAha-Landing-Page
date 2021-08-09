import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from './NavDropdown/NavDropdown'
import Button from '../../../UI/Button/Button'
import NavButton from './NavButton/NavButton';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';


import './Navbar.css'
import AnimatedLogo from '../../../UI/Logo/AnimatedLogo';





const MainNavbar = (props) => {

  const { t } = useTranslation();

  const [navState, setNavState] = useState("");

  const toggleNav = () => {
   return setNavState(navState==="expanded"?"":"expanded")
  }

  const navVariants = {
    start: {
      opacity: 0,
      y: -100,
    },
    end: {
      opacity:100,
      y: 0,
      transition: {
        duration: 1.25,
        ease: 'easeInOut'
      }
    },
  };


    return (
      <Navbar
        as={motion.nav}
        className={navState + ' p-xl-5 p-lg-4 p-md-2 p-0'}
        id="mainNavbar"
        fixed="top"
        expanded={navState === 'expanded' && true}
        expand="md"
        onToggle={toggleNav}
        variant="dark"
        variants={navVariants}
        initial="start"
        animate="end"
      >
        <Navbar.Brand href="#" className="px-xl-5 px-lg-4 px-0 mx-3 mx-md-0">
          <AnimatedLogo className="navbar-logo img-fluid" alt="logo" />
        </Navbar.Brand>
        <NavButton navButtonClass={navState} clicked={toggleNav} />
        <Navbar.Collapse
          className="px-xl-4 px-lg-3 px-md-0 px-0"
          id="responsive-navbar-nav"
        >
          <Nav className="ml-auto">
            <Nav.Link className="px-xl-4 px-lg-3 px-2 py-3 py-md" href="#about">
              {t('header.navbar.about')}
            </Nav.Link>
            <Nav.Link
              className="px-xl-4 px-lg-3 px-2 py-3 py-md"
              href="#signup"
            >
              {t('header.navbar.signup')}
            </Nav.Link>
          </Nav>
          <NavDropdown />
          <Nav>
            <Button
              btnText={t('header.navbar.download')}
              clicked={props.openModal}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default MainNavbar
