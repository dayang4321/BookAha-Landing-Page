import React,{useContext} from 'react';

import {AuthContext} from '../../context/AuthContext'
import AdminMain from './AdminMain/AdminMain';
import Navbar from './Navbar/Navbar'

import './Admin.css'


const Admin = (props) => {

    const authContext = useContext(AuthContext);
    return (
        <>
        <Navbar />
            <AdminMain  token={authContext.token} />
            </>
        
    );
}

export default Admin;