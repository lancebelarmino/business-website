import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hamburgerIcon: {
    fill: theme.colors.gray[2],
    transition: theme.other.transition.fill,

    '&:hover': {
      fill: theme.colors.black,
    },
  },

  closeIcon: {
    stroke: theme.colors.gray[2],
    transition: theme.other.transition.stroke,

    '&:hover': {
      stroke: theme.colors.black,
    },
  },

  dropdown: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: '7.5rem 1.5rem 2.5rem 1.5rem',
    backgroundColor: theme.colors.white,
    boxShadow: theme.shadows.sm,
  },

  menu: {
    marginBottom: 80,
  },

  link: {
    fontSize: 24,
  },

  btn: {
    display: 'block',
    padding: 0,
    marginBottom: 16,
    backgroundColor: 'transparent',
    fontSize: 32,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  linkIcon: {
    marginLeft: 6,
  },

  email: {
    fontSize: 20,
  },
}));

export default useStyles;
