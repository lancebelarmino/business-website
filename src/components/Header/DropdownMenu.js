import React, { useState } from 'react';
import { Group, Anchor, Button, UnstyledButton } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerIcon from '../Icons/HamburgerIcon';
import CloseIcon from '../Icons/CloseIcon';
import { ReactComponent as ButtonLink } from '../../assets/link.svg';
import useStyles from './DropdownMenu.styles';

const fontVariant = {
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
  exit: (i) => {
    return {
      y: -10,
      opacity: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.2,
        delay: i * 0.1,
      },
    };
  },
};

const DropdownMenu = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const dropdownHandler = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {!opened && (
          <UnstyledButton onClick={dropdownHandler} key="hamburger">
            <HamburgerIcon />
          </UnstyledButton>
        )}

        {opened && (
          <UnstyledButton onClick={dropdownHandler} key="close">
            <CloseIcon />
          </UnstyledButton>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <motion.div
            className={classes.dropdown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}>
            <motion.div initial="hidden" animate="visible" exit="exit">
              <Group className={classes.menu} direction="column" spacing={32}>
                <Anchor
                  className={classes.link}
                  href="#about"
                  component={motion.a}
                  variants={fontVariant}
                  custom={1}>
                  About
                </Anchor>

                <Anchor
                  className={classes.link}
                  href="#projects"
                  component={motion.a}
                  variants={fontVariant}
                  custom={2}>
                  Projects
                </Anchor>

                <Anchor
                  className={classes.link}
                  href="#contact"
                  component={motion.a}
                  variants={fontVariant}
                  custom={3}>
                  Contacts
                </Anchor>
              </Group>

              <Button
                className={classes.btn}
                rightIcon={<ButtonLink className={classes.linkIcon} />}
                component={motion.button}
                variants={fontVariant}
                custom={4}>
                Contact Me
              </Button>

              <Anchor
                className={classes.email}
                component={motion.a}
                variants={fontVariant}
                custom={5}>
                lancebelarmino@gmail.com
              </Anchor>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropdownMenu;
