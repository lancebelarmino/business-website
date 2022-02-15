import { Group, Anchor } from '@mantine/core';

const HorizontalMenu = () => {
  return (
    <Group spacing={40}>
      <Anchor href="#about">About</Anchor>
      <Anchor href="#projects">Projects</Anchor>
      <Anchor href="#contact">Contact</Anchor>
    </Group>
  );
};

export default HorizontalMenu;
