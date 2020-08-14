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

        <Form>
            <Row>
                <Col md={6} className="pr-4">
                    <Input inputType="text" placeholder="Name" label="Name" name="name" groupId="name"/>
                </Col>
                <Col md={6}  className="pl-4">
                     <Input inputType="email" placeholder="Email Address" label="Email" name="email" groupId="email"/>
                </Col>
            </Row>
            <Row className="pt-4">
                <Col md={6} className="pr-4 pt-3">
                    <Button btnText="Notify Me"/>
                </Col>
                <Col md={6}  className="pl-4 pt-3 d-flex align-items-center">
                   <Input inputType="checkbox" id="subscribe" label="I would love to join the beta test"/>
                </Col>

            </Row>
 

        </Form>

    )
}


export default Register