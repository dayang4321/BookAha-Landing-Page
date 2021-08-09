import React from 'react';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

import './Button.css';

const myButton = (props) => {
  return (
    <Button
      as={motion.button}
      whileTap={{
        scale: 0.92,
      }}
      whileHover={{
        scale: 1.04,
      }}
      variant="light"
      type={props.btnType}
      onClick={props.clicked ? () => props.clicked() : null}
      className="white-button b-0 text-dark bg-white border-0 rounded-sm"
    >
      {' '}
      {props.btnText}{' '}
    </Button>
  );
};

export default myButton;
