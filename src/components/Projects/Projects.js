import React from 'react';
import { Divider, SimpleGrid, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Section from '../Templates/Section';
import ProjectItem from './ProjectItem';
import useStyles from './Projects.styles';
import data from '../../data/projects';

const Projects = () => {
  const { classes } = useStyles();
  const isDesktop = useMediaQuery('(min-width: 1000px)');

  return (
    <Section size={1236} type={'content'}>
      {isDesktop && <Divider />}
      <Title className={classes.heading} order={3}>
        Recent Projects
      </Title>

      <SimpleGrid
        className={classes.wrapper}
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {data.map((item) => (
          <ProjectItem
            key={item.id}
            image={item.image}
            link={item.link}
            details={item}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default Projects;
