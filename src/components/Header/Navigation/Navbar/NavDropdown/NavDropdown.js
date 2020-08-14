import React,{useState} from 'react'
import {NavDropdown} from 'react-bootstrap'
import NavDropdownItem from './NavDropdownItem/NavDropdownItem'
import RoundFlag from '../../../../UI/RoundFlag/RoundFlag'
import './NavDropdown.css'


const NavDrop = (props) => {

    const [dropTitle, setDropTitle] = useState({
        menuText: "EN-GB",
        flagSrc: "united_kingdom.svg" 
    })

    const dropClickHandler = (title, flag) => {
        return setDropTitle({
            menuText: title,
            flagSrc: flag
       })
    }



    return (
        <React.Fragment>
    
        <NavDropdown className="px-xl-4 px-lg-3 px-0 py-3 py-md" title={ <><RoundFlag imgSrc={dropTitle.flagSrc} />{dropTitle.menuText}</> } id="collasible-nav-dropdown">
            <NavDropdownItem menuText="EN-GB" imgSrc="united_kingdom.svg" id="english-GB" clicked={dropClickHandler}/>
            <NavDropdownItem menuText="EN-US" imgSrc="united_states.svg" id="english-usa" clicked={dropClickHandler} />
            <NavDropdownItem menuText="FR-FR" imgSrc="france.svg" id="french-france" clicked={dropClickHandler} />
            <NavDropdownItem menuText="ES-ES" imgSrc="spain.svg" id="spanish-spain" clicked={dropClickHandler}/>
        </NavDropdown>
        </React.Fragment>
      

    )
}


export default NavDrop

