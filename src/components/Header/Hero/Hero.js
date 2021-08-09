import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from '../../UI/Button/Button';
import './Hero.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const headerVariants = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
      opacity: 1,
    x: 0,
    transition: {
        ...transition
    },
  },
};

const buttonVariants = {
  initial: {
    scale: 0.9,
  },
  animate: {
      scale:1,
    transition: {
        ...transition,
        repeat: 20,
        repeatDelay: 5,
      duration: 1,
    },
  },
};

const Hero = (props) => {
  const { t } = useTranslation();

  return (
    <Container className="my-auto">
      <Col lg={7} className="hero ml-auto">
        <div className="black-box">
          <div className="title-box overflow-hidden">
            <motion.h1
              initial="initial"
              animate="animate"
              exit="exit"
              className="hero-title mb-0 overflow-hidden"
              variants={headerVariants}
            >
              {t('header.hero.title')}
            </motion.h1>
            <Button
              initial="initial"
              animate="animate"
              exit="exit"
              btnText={t('header.hero.getapp')}
              clicked={props.openModal}
              variants={buttonVariants}
            />
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Hero;
