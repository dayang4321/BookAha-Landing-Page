import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './InfoBlock.css';
import { motion } from 'framer-motion';

//Ease
const transition = {
  duration: 1,
 // ease: [0.6, 0.01, -0.05, 0.9],
  ease: "easeInOut"
};

const topLeftVariants = {
  initial: {
    x: '-2.22rem',
    y: '-2.5rem',
    transition: {
      ...transition,
    },
  },
  hover: {
    x: 0,
    y: 0,
    transition: {
      ...transition,
    },
  },
};

const topRightVariants = {
  initial: {
    x: '2.22rem',
    y: '-2.5rem',
    transition: {
      ...transition,
    },
  },
  hover: {
    x: 0,
    y: 0,
    transition: {
      ...transition,
    },
  },
};

const infoBlock = (props) => {
  return (
    <Row className="info-row d-flex align-items-center">
      <Col xs={12} md={6} className={'info-text-block ' + props.textClass}>
        <h1 className="info-title mb-0">{props.infoTitle}</h1>
        <p className="info-text mb-0">{props.infoText}</p>
      </Col>
      <Col
        xs={'auto'}
        md={{ span: 'auto', order: props.imgOrder }}
        className={`${'img-block ' + props.imgBlockClass} ${
          props.imgOrder ? ' mr-auto ' : ' ml-lg-auto '
        }`}
      >
        <div className={`black-bg ${props.imgClass}`}>
          <motion.img
            initial="initial"
            whileHover="hover"
            exit="initial"
            variants={
              props.imgClass === 'left' ? topLeftVariants : topRightVariants
            }
            className={'img-fluid about-img'}
            src={require('../../../assets/images/' + props.imgSrc)}
            alt={props.imgAlt}
          />
        </div>
      </Col>
    </Row>
  );
};

export default infoBlock;
