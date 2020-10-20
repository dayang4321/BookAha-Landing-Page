import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Amplify, { API } from 'aws-amplify'
import config from '../../aws-exports'
import {inputChangeHandler} from '../../shared/utility'
import Spinner from '../../components/UI/Spinner/Spinner'
import './Register.css'
import { useTranslation } from "react-i18next";
import Axios from '../../axios-base'


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

    const { t } = useTranslation();

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
        console.log(registerForm)
        event.preventDefault();
        if (registerForm.formValidity === false) { }

        else {
            setFormLoading(true);
            // API.post('bookahaApi', '/users', {
            //     body: {
            //         name: registerForm.name.value,
            //         email: registerForm.email.value,
            //         isSubscribed: registerForm.isSubcribed.value,
            //     }
            // })
            const formData =  {
                         name: registerForm.name.value,
                         email: registerForm.email.value,
                         isSubscribed: registerForm.isSubscribed.value,
                     }
            Axios.post('/launch',  formData)
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
                    type: "text", placeholder: t("register.input.name.placeholder"),
                    name: "name", onChange: (e) => inputChangeHandler(e,"name",registerForm, setRegisterForm), required: true,
                isValid: shouldValidate("name"), isInvalid:shouldInValidate("name"), value: registerForm.name.value,
                }} label={ t("register.input.name.label")} groupId="name" />
            </Col> 
            <Col md={6}  className="pl-md-4 px-3 px-md">
                <Input inputAttr={{
                    type: "email", placeholder:t("register.input.email.placeholder"), name: "email",
                    onChange: (e) => inputChangeHandler(e, "email", registerForm, setRegisterForm), required: true,
                    isValid: shouldValidate("email"), isInvalid:shouldInValidate("email"), value: registerForm.email.value,
                }} label={t("register.input.email.label")} groupId="email" />
            </Col>
        </Row>
            
        <Row className="pt-md-4 pt-3">
            <Col md={6} className="pr-md-4 px-3 d-flex d-md px-md pt-3">
                <Button btnText={t("register.notify")} btnType="submit"/>
            </Col>
            <Col md={6}  className="pl-md-4 px-3 px-md  pt-md-3 pt-4 d-flex align-items-center justify-content-center justify-content-md">
                <Input inputAttr={{
                    type: "checkbox", name: "isSubscribed",
                    onChange: (e) => inputChangeHandler(e,"isSubscribed",registerForm, setRegisterForm),
                    required: false, value: registerForm.isSubcribed.value,
                }} id="isSubscribed" label={ t("register.input.isSubscribed.label")} />
            </Col>

        </Row>
    </Form>

    )

    let formHeader;

   


    switch (props.registerParent) {
        case "footer":
            formHeader = (
                <h1 className="footer-title mb-5">
                {isSignedUp? t("register.title.footer.success") :  t("register.title.footer.default") }
            </h1>
            )
            break;
            case "modal":
                formHeader = (
                    <h1 className="register-modal-title mb-3">
                    {isSignedUp? t("register.title.modal.success") : t("register.title.modal.default") }
                    </h1>
                )
                break;
    
        default: formHeader = null
            break;
    }

    return (    


        formLoading? <Spinner /> : <>
            {hasError? <h1 className="text-white mb-4">{ t("register.title.error")}</h1>:formHeader}
            {formBody}
        </>
       

       
    )
}


export default Register