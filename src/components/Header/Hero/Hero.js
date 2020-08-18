import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from '../../UI/Button/Button'
import './Hero.css'
import { Container } from 'react-bootstrap'
import { useTranslation } from "react-i18next";



const Hero = (props) => {

    
    const { t } = useTranslation();
    
    return (
        <Container className="my-auto">

          
            
            <Col lg={7} className="hero ml-auto">
          
                    <div className="black-box">
                        <div className="title-box">
                            <h1 className="hero-title mb-0">{t("header.hero.title")}</h1>
                        <Button btnText={t("header.hero.getapp")}clicked={props.openModal}/>
                        </div>
                    </div>
                    
                </Col>           
        </Container>
        
    )
}


export default Hero