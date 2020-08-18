import React,{useState} from 'react'
import {NavDropdown} from 'react-bootstrap'
import NavDropdownItem from './NavDropdownItem/NavDropdownItem'
import RoundFlag from '../../../../UI/RoundFlag/RoundFlag'
import './NavDropdown.css'
import { useTranslation } from "react-i18next";


const NavDrop = (props) => {

    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };
    
    const [dropTitle, setDropTitle] = useState({
        menuText: "EN-US",
        flagSrc: "united_states.svg" 
    })

    const dropClickHandler = (title, flag, languguage) => {
        setDropTitle({
            menuText: title,
            flagSrc: flag
        });
        changeLanguage(languguage);
    }



    return (
        <React.Fragment>
    
        <NavDropdown className="px-xl-4 px-lg-3 px-0 py-3 py-md" title={ <><RoundFlag imgSrc={dropTitle.flagSrc} />{dropTitle.menuText}</> } id="collasible-nav-dropdown">
            <NavDropdownItem onDisplay={dropTitle.menuText} menuText="EN-GB" imgSrc="united_kingdom.svg" lang="en-gb" id="english-GB" clicked={dropClickHandler}/>
            <NavDropdownItem onDisplay={dropTitle.menuText} menuText="EN-US" imgSrc="united_states.svg" lang="en-us" id="english-usa" clicked={dropClickHandler} />
            <NavDropdownItem onDisplay={dropTitle.menuText} menuText="FR-FR" imgSrc="france.svg" lang="fr-fr" id="french-france" clicked={dropClickHandler} />
            <NavDropdownItem onDisplay={dropTitle.menuText} menuText="ES-ES" imgSrc="spain.svg" lang="es-es" id="spanish-spain" clicked={dropClickHandler}/>
        </NavDropdown>
        </React.Fragment>
      

    )
}


export default NavDrop

