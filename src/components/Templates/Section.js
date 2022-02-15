import React from 'react';
import { Container } from '@mantine/core';
import useStyles from './Section.styles';

const Section = ({ id, type, size, children }) => {
  const { classes } = useStyles();

  return (
    <section className={classes[type]} id={id}>
      <Container className={classes.container} size={size}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
