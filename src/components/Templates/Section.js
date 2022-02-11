import React from 'react';
import { Container } from '@mantine/core';
import useStyles from './Section.styles';

const Section = ({ children }) => {
  const { classes } = useStyles();

  return (
    <section>
      <Container size={1236} padding={0}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
