import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from '../../UI/Button/Button'
import './Hero.css'
import { Container } from 'react-bootstrap'




const hero = (props) => {

    

    
    return (
        <Container className="my-auto">

          
            
            <Col lg={7} className="hero ml-auto">
          
                    <div className="black-box">
                        <div className="title-box">
                            <h1 className="hero-title mb-0">Share thoughts from books you love</h1>
                        <Button btnText="Get the App" clicked={props.openModal}/>
                        </div>
                    </div>
                    
                </Col>           
        </Container>
        
    )
}


export default hero