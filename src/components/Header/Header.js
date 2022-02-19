import React from 'react';
import { Group, Anchor } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Section from '../Templates/Section';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import useStyles from './Header.styles';

const Header = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width: 800px)');

  const HorizontalMenu = (
    <Group spacing={40}>
      <Anchor href="#about">About</Anchor>
      <Anchor href="#projects">Projects</Anchor>
      <Anchor href="#contact">Contact</Anchor>
    </Group>
  );

  return (
    <Section size={1236} type="header">
      <Group position="apart">
        <Logo className={classes.logo} />
        {isMobile ? <DropdownMenu /> : HorizontalMenu}
      </Group>
    </Section>
  );
};

export default Header;
