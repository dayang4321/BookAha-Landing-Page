import React from 'react'
import Navbar from './Navigation/Navbar/Navbar'
import RegisterModal from '../../containers/RegisterModal/RegisterModal'
import Hero from './Hero/Hero'

import './Header.css'





const Header = (props) => {

    const [modalShow, setModalShow] = React.useState(false);

    const toggleModal = () => {
       return setModalShow(!modalShow)
    }
   

    return (
        <header className="header">
            <Navbar openModal={toggleModal} />
            <RegisterModal show={modalShow} onHide={toggleModal} />
           <Hero  openModal={toggleModal} />
        </header>
     
    )
}

export default Header