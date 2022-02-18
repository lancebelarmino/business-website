import React from 'react';
import { Anchor, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import useStyles from './AnimatedLink.styles';

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

const AnimatedLink = ({ link, text, icon }) => {
  const { classes } = useStyles();

  return (
    <Anchor
      href={link}
      className={classes.link}
      component={motion.a}
      initial="hidden"
      whileHover="animate">
      <Group className={classes.wrapper}>
        <span>{text}</span>
        <motion.span className={classes.icon} variants={buttonVariant}>
          {icon}
        </motion.span>
      </Group>
    </Anchor>
  );
};

export default AnimatedLink;
