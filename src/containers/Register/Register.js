import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

import './Register.css'



const Register = (props) => {

    const [registerForm, setRegisterForm] = useState({
        name: {
            value: '',
            validation: {
              required: true,
              minLength: 2,
              isAlphnabet:true
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
        }
      });

    return (

        <Form className="register-form">
            <Row>
                <Col md={6} className="pr-md-4 px-3 px-md">
                    <Input inputType="text" placeholder="Name" label="Name" name="name" groupId="name"/>
                </Col> 
                <Col md={6}  className="pl-md-4 px-3 px-md">
                     <Input inputType="email" placeholder="Email Address" label="Email" name="email" groupId="email"/>
                </Col>
            </Row>
            <Row className="pt-md-4 pt-3">
                <Col md={6} className="pr-md-4 px-3 d-flex d-md px-md pt-3">
                    <Button btnText="Notify Me"/>
                </Col>
                <Col md={6}  className="pl-md-4 px-3 px-md  pt-md-3 pt-4 d-flex align-items-center justify-content-center justify-content-md">
                   <Input inputType="checkbox" id="subscribe" label="I would love to join the beta test"/>
                </Col>

            </Row>
 

        </Form>

    )
}


export default Register