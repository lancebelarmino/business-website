import React from 'react';
import { Image, Group, Title, Text } from '@mantine/core';
import Section from '../Templates/Section';
import AnimatedLink from '../Templates/AnimatedLink';
import { ReactComponent as RightIcon } from '../../assets/right.svg';
import useStyles from './About.styles';
import about from '../../assets/about.jpg';

const About = () => {
  const { classes } = useStyles();

  return (
    <Section id="about" size={996} type={'content'}>
      <Group className={classes.wrapper}>
        <Image
          src={about}
          width={240}
          alt="Lance's portrait photo"
          className={classes.image}
        />

        <div>
          <Title order={2} className={classes.heading}>
            Hi, I’m Lance
          </Title>
          <Text size="lg" className={classes.subheading}>
            I’m a web developer and user interface designer who helps inspiring
            small or upcoming businesses build their online presence. Let me
            help you build your ideal website so that you can grow your
            business.
          </Text>
          <AnimatedLink
            link="#services"
            text="View My Services"
            component={<RightIcon />}
          />
        </div>
      </Group>
    </Section>
  );
};

export default About;
