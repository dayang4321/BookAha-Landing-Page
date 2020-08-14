import React from 'react'
import logo from '../UI/Logo/logo.svg'
import Register from '../../containers/Register/Register'

import './Footer.css'


const footer = (main) => {
    return (
        <footer className="footer">
            <h1 className="footer-title mb-5">
                Be the first to know when we launch
            </h1>
            <Register/>
            <div className="footer-base">
                <img src={logo} className="footer-logo mb-5" alt="logo" />
                <p className="copyright">Copyright &copy; 2020. BookAHA.</p>
            </div>
       
        </footer>
     
        
    )

}

export default footer