import React from 'react';
import { Image, Group, Title, Text } from '@mantine/core';
import Section from '../Templates/Section';
import AnimatedLink from '../Templates/AnimatedLink';
import { ReactComponent as RightIcon } from '../../assets/right.svg';
import useStyles from './About.styles';

const About = () => {
  const { classes } = useStyles();

  return (
    <Section id="about" size={996} type="content">
      <Group className={classes.wrapper}>
        <Image
          className={classes.image}
          src="https://f004.backblazeb2.com/file/website-business/about.jpg"
          width={240}
          height={240}
          radius={240}
          alt="Lance's portrait photo"
          withPlaceholder
        />

        <div>
          <Title className={classes.heading} order={3}>
            Hi, I'm Lance
          </Title>

          <Text className={classes.subheading} size="lg">
            I'm a frontend developer, and occasionally a user interface
            designer, who helps businesses build their online presence. Let me
            help you create your ideal website and make a memorable experience
            for your customers.
          </Text>

          <AnimatedLink
            link="#services"
            text="View My Services"
            icon={<RightIcon />}
          />
        </div>
      </Group>
    </Section>
  );
};

export default About;
