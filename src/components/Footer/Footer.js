import React from 'react'
import logo from '../UI/Logo/logo.svg'
import Register from '../../containers/Register/Register'

import './Footer.css'


const footer = (main) => {

   

    return (
      <footer className="footer" id="signup">
        <div className="container">
          <Register registerParent="footer" />
          <div className="footer-base">
            <img src={logo} className="footer-logo mb-md-3 mb-2" alt="logo" />
            <p className="copyright">
              Copyright &copy; {new Date().getFullYear()}. BookAHA.
            </p>
          </div>
        </div>
      </footer>
    );

}

export default footer