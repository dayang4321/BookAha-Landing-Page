import React from 'react'
import Navbar from './Navigation/Navbar/Navbar'

import Hero from './Hero/Hero'

import './Header.css'



const header = (props) => {
    return (
        <header className="header">
            <Navbar />
          
           <Hero/>
        </header>
     
    )
}

export default header