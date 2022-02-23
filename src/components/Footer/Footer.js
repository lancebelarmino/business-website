import React from 'react';
import { Text, Divider, Anchor, Group } from '@mantine/core';
import Section from '../Templates/Section';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import useStyles from './Footer.styles';

const Footer = () => {
  const { classes } = useStyles();

  return (
    <Section size={1236} type="footer">
      <Divider />

      <div className={classes.content}>
        <Group className={classes.column1} direction="column">
          <LogoIcon className={classes.logo} />
          <Text>© 2021 Lance Belarmino</Text>
        </Group>

        <div>
          <Group
            className={classes.linkWrapper}
            direction="column"
            spacing={36}>
            <Anchor href="https://mantine.dev/" target="_blank">
              Github
            </Anchor>
            <Anchor href="https://mantine.dev/" target="_blank">
              Dribble
            </Anchor>
          </Group>
        </div>

        <div>
          <Group
            className={classes.linkWrapper}
            direction="column"
            spacing={36}>
            <Anchor href="https://mantine.dev/" target="_blank">
              Behance
            </Anchor>
            <Anchor href="https://mantine.dev/" target="_blank">
              LinkedIn
            </Anchor>
          </Group>
        </div>

        <div>
          <Group
            className={classes.linkWrapper}
            direction="column"
            spacing={36}>
            <Anchor href="https://mantine.dev/" target="_blank">
              Facebook
            </Anchor>
            <Anchor href="https://mantine.dev/" target="_blank">
              Twitter
            </Anchor>
          </Group>
        </div>

        <div>
          <Anchor href="https://mantine.dev/" target="_blank">
            Instagram
          </Anchor>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
