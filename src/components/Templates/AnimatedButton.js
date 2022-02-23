import React from 'react';
import { UnstyledButton, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import useStyles from './AnimatedButton.styles';

const buttonVariant = {
  hidden: {
    x: -5,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
    },
  },
};

const AnimatedButton = ({ type, text, icon }) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton
      className={classes.button}
      type={type}
      component={motion.button}
      initial="hidden"
      whileHover="animate">
      <Group className={classes.wrapper}>
        <span>{text}</span>
        <motion.span className={classes.icon} variants={buttonVariant}>
          {icon}
        </motion.span>
      </Group>
    </UnstyledButton>
  );
};

export default AnimatedButton;
