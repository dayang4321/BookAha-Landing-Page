import React from 'react'
import Button from 'react-bootstrap/Button'

const myButton = (props) => {
    return (
        <Button variant="light" type={props.btnType}  onClick={props.clicked?() => props.clicked() : null}  className="b-0 text-dark bg-white border-0 rounded-0"> {props.btnText} </Button>
    )
}


export default myButton


