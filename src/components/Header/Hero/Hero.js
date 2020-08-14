import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from '../../UI/Button/Button'
import RegisterModal from '../../../containers/RegisterModal/RegisterModal'
import './Hero.css'
import { Container } from 'react-bootstrap'




const Hero = (props) => {

    
    const [modalShow, setModalShow] = React.useState(false);

    const toggleModal = () => {
       return setModalShow(!modalShow)
    }
    
    return (
        <Container className="my-auto">

          
            
            <Col lg={7} className="hero ml-auto">
            <RegisterModal show={modalShow} onHide={toggleModal} />
                    <div className="black-box">
                        <div className="title-box">
                            <h1 className="hero-title mb-0">Share thoughts from books you love</h1>
                        <Button btnText="Get the App" clicked={toggleModal}/>
                        </div>
                    </div>
                    
                </Col>           
        </Container>
        
    )
}


export default Hero