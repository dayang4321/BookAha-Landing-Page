import React from 'react'
import { Form } from 'react-bootstrap'

import './Input.css'




const input = (props) => {

    if (props.inputType==="checkbox") {
        return (
            <Form.Group>
            <Form.Check
          
            type={props.inputType}
            id={props.id}
            label={props.label}/>
            </Form.Group>
        )
    }  
    
    else {
        return (
            <Form.Group  controlId={props.groupId}>
            <Form.Label  srOnly>{props.label}</Form.Label>
            <Form.Control type={props.inputType} placeholder={props.placeholder} />
            </Form.Group>
        )
    }
       

      
}

export default input