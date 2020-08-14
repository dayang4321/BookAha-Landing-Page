import React from 'react'
import MainModal from '../../components/UI/Modal/Modal'
import Register from '../Register/Register'

import './RegisterModal.css'



const RegisterModal= (props) => {
    return (
        <MainModal {...props}>
            <div className="pb-xl-5 pb-lg-4 pb-3 px-xl-5 px-lg-4 px-md-3 px-2 ">
                <h1 className="register-modal-title mb-0">
                Get free access to exclusive reading clubs when you sign up for the beta test
                </h1>
                <Register />
            </div>
           
        </MainModal>

    )
}

export default RegisterModal