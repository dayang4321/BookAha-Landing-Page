import React from 'react'
import MainModal from '../../components/UI/Modal/Modal'
import Register from '../Register/Register'

import './RegisterModal.css'



const RegisterModal= (props) => {
    return (
        <MainModal {...props}>
            <div className="pb-xl-5 pb-lg-4 pb-3 px-xl-5 px-lg-4 px-md-3 px-2 ">
               
                <Register registerParent="modal"/>
            </div>
           
        </MainModal>

    )
}

export default RegisterModal