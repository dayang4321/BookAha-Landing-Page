import React from 'react'
import logo from '../UI/Logo/logo.svg'
import Register from '../../containers/Register/Register'

import './Footer.css'


const footer = (main) => {

   

    return (
        <footer className="footer" id="signup">
           
            <Register registerParent="footer"/>
            <div className="footer-base">
                <img src={logo} className="footer-logo mb-lg-5 mb-md-3 mb-2" alt="logo" />
                <p className="copyright">Copyright &copy; 2020. BookAHA.</p>
            </div>
       
        </footer>
     
        
    )

}

export default footer