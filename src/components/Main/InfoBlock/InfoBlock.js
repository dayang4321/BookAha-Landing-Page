import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './InfoBlock.css'


const infoBlock = (props) => {

    return (
        <Row className="info-row">
        <Col xs={12}  md={6} className={"info-text-block " + props.textClass }>
            <h1 className="info-title mb-0">
                {props.infoTitle}
            </h1>
            <p className="info-text mb-0">{props.infoText}</p>
        </Col>
        <Col xs={'auto'}  md={{span: "auto", order: props.imgOrder }}  className={`${"img-block " + props.imgBlockClass} ${props.imgOrder? " mr-auto ":" ml-lg-auto " }`}>
            <div className="black-bg">
                <img className={"img-fluid " + props.imgClass} src={require("../../../assets/images/" + props.imgSrc)} alt={props.imgAlt}/>
            </div>
        </Col>
    </Row>
    )
  
}

export default infoBlock