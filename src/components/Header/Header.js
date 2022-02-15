import React from 'react';
import { Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Section from '../Templates/Section';
import HorizontalMenu from './HorizontalMenu';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import useStyles from './Header.styles';

const Header = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <Section size={1236} type={'header'}>
      <Group position="apart">
        <Logo className={classes.logo} />

        {isMobile ? <DropdownMenu /> : <HorizontalMenu />}
      </Group>
    </Section>
  );
};

export default Header;
