import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Amplify, { API } from 'aws-amplify'
import config from '../../aws-exports'
import {inputChangeHandler} from '../../shared/utility'
import Spinner from '../../components/UI/Spinner/Spinner'
import './Register.css'


Amplify.configure(config);


const registerFormObj = {
    name: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
    },
      email: {
      value: '',
      validation: {
          required: true,
        isEmail: true,
      },
      valid: false,
      touched: false
    },
     isSubcribed: {
        value: false,
        valid: true,
        touched: false
    },
     formValidity: false
}


const Register = (props) => {

    const [formLoading, setFormLoading] = useState(false);

    const [isSignedUp, setIsSignedUp] =  useState(false);

    const [hasError, setHasError] =  useState(false);

    const [registerForm, setRegisterForm] = useState(registerFormObj);
  
    const shouldValidate = (inputName) => {
        if (!registerForm[inputName].touched) {
            return null
        }
        else return registerForm[inputName].valid

    }
    const shouldInValidate = (inputName) => {
        if (!registerForm[inputName].touched) {
            return null
        }
        else return !registerForm[inputName].valid

    }
  
  
    const handleSubmit = (event) => {     
        event.preventDefault();
        if (registerForm.formValidity === false) { }

        else {
            setFormLoading(true);
            API.post('bookahaApi', '/users', {
                body: {
                    name: registerForm.name.value,
                    email: registerForm.email.value,
                    isSubscribed: registerForm.isSubcribed.value,
                }
            })
            .then(res => {
                setFormLoading(false);
                setIsSignedUp(true);
                console.log(res);
                setRegisterForm(registerFormObj)
                } )
            .catch(err => {
                setFormLoading(false);
                setHasError(true)
                    console.log(err);
            })
            setRegisterForm(registerFormObj)
    }      
    }

    const formBody = (
        
        <Form className="register-form" noValidate onSubmit={handleSubmit} autoComplete="on">
        <Row>
            <Col md={6} className="pr-md-4 px-3 px-md mb-3 mb-md">
                <Input inputAttr={{
                    type: "text", placeholder: "Name",
                    name: "name", onChange: (e) => inputChangeHandler(e,"name",registerForm, setRegisterForm), required: true,
                isValid: shouldValidate("name"), isInvalid:shouldInValidate("name")
                }} label="Name" groupId="name" />
            </Col> 
            <Col md={6}  className="pl-md-4 px-3 px-md">
                <Input inputAttr={{
                    type: "email", placeholder: "Email Address", name: "email",
                    onChange: (e) => inputChangeHandler(e, "email", registerForm, setRegisterForm), required: true,
                    isValid: shouldValidate("email"), isInvalid:shouldInValidate("email")
                }} label="Email" groupId="email" />
            </Col>
        </Row>
            
        <Row className="pt-md-4 pt-3">
            <Col md={6} className="pr-md-4 px-3 d-flex d-md px-md pt-3">
                <Button btnText="Notify Me" btnType="submit"/>
            </Col>
            <Col md={6}  className="pl-md-4 px-3 px-md  pt-md-3 pt-4 d-flex align-items-center justify-content-center justify-content-md">
                <Input inputAttr={{
                    type: "checkbox", name: "subscribed",
                    onChange: (e) => inputChangeHandler(e,"isSubscribed",registerForm, setRegisterForm),
                    required: false
                }} id="subscribe" label="I would love to join the beta test" />
            </Col>

        </Row>
    </Form>

    )

    let formHeader;


    switch (props.registerParent) {
        case "footer":
            formHeader = (
                <h1 className="footer-title mb-5">
                {isSignedUp?"Congrats! You'll be Notified! ":"Be the first to know when we launch"}
            </h1>
            )
            break;
            case "modal":
                formHeader = (
                    <h1 className="register-modal-title mb-3">
                    {isSignedUp?"Congrats! You'll be the first to know when we launch":" Get free access to exclusive reading clubs when you sign up for the beta test"}
                    </h1>
                )
                break;
    
        default: formHeader = null
            break;
    }

    return (    


        formLoading? <Spinner /> : <>
            {hasError? <h1 className="text-white mb-4">Oops! Looks like something went wrong</h1>:formHeader}
            {formBody}
        </>
       

       
    )
}


export default Register