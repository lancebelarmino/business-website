import React from 'react';
import { Title, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import useStyles from './ProjectDetail.styles';

const titleVariant = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
      delay: 0.1,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const textVariant = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: (i) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.2,
        delay: i * 0.1,
      },
    };
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const ProjectDetail = ({ title, type, tech, credits, link }) => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width: 800px)');

  const heading = (
    <Title
      className={classes.heading}
      order={2}
      component={motion.h2}
      variants={titleVariant}>
      {title}
    </Title>
  );

  return (
    <motion.div
      className={classes.content}
      initial="hidden"
      animate="visible"
      exit="exit">
      {isMobile ? (
        <a href={link} target="_blank" rel="noreferrer">
          {heading}
        </a>
      ) : (
        heading
      )}

      <div className={classes.wrapper}>
        <div className={classes.detail}>
          <Text
            className={classes.subheading}
            component={motion.div}
            variants={textVariant}
            custom={1}>
            Type
          </Text>
          {type.map((item, index) => (
            <Text
              key={index}
              className={classes.text}
              component={motion.div}
              variants={textVariant}
              custom={1}>
              {item}
            </Text>
          ))}
        </div>

        <div className={classes.detail}>
          <Text
            className={classes.subheading}
            component={motion.div}
            variants={textVariant}
            custom={2}>
            Tech
          </Text>
          {tech.map((item, index) => (
            <Text
              key={index}
              className={classes.text}
              component={motion.div}
              variants={textVariant}
              custom={2}>
              {item}
            </Text>
          ))}
        </div>
      </div>

      {credits && (
        <div className={classes.detail}>
          <Text
            className={classes.subheading}
            component={motion.div}
            variants={textVariant}
            custom={3}>
            Credits
          </Text>

          <Text
            className={classes.text}
            component={motion.div}
            variants={textVariant}
            custom={3}>
            {credits}
          </Text>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;
