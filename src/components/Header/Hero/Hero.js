import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from '../../UI/Button/Button';
import './Hero.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const blackBoxVariants = {
  initial: {
    width: 0,
    height: 0,
  },
  animate: {
    width: '18.33rem',
    height: '16.11rem',
    transition: {
      ...transition,
    },
  },
};

const headerVariants = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ...transition,
    },
  },
};

const buttonVariants = {
  initial: {
    scale: 0.9,
  },
  animate: {
    scale: 1,
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
      <Col xl={6} lg={7} md={9} className="hero ml-auto">
        <motion.div
          className="black-box"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={blackBoxVariants}
        >
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
        </motion.div>
      </Col>
    </Container>
  );
};

export default Hero;
