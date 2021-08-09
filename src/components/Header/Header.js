import React from 'react'
import RegisterModal from '../../containers/RegisterModal/RegisterModal'
import Hero from './Hero/Hero'

import './Header.css'





const Header = (props) => {

    const {toggleModal, modalShow} = props
    return (
        <header className="header">         
            <RegisterModal show={modalShow} onHide={toggleModal} />
           <Hero  openModal={toggleModal} />
        </header>
     
    )
}

export default Header