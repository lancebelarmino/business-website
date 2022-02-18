import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  content: {
    position: 'relative',
    zIndex: 999,
  },

  wrapper: {
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
  },

  detail: {
    marginBottom: 60,

    [theme.fn.smallerThan('sm')]: {
      color: theme.colors.black,
      marginBottom: 32,
    },
  },

  heading: {
    display: 'inline-block',
    marginBottom: 60,
    color: theme.colors.white,

    [theme.fn.smallerThan('md')]: {
      marginBottom: 24,
      fontSize: 32,
    },

    [theme.fn.smallerThan('sm')]: {
      color: theme.colors.black,
    },
  },

  subheading: {
    marginBottom: 16,
    color: theme.colors.white,
    fontSize: 8,
    fontWeight: 500,
    letterSpacing: 2,
    textTransform: 'uppercase',

    [theme.fn.smallerThan('sm')]: {
      color: theme.colors.black,
    },
  },

  text: {
    marginBottom: 16,
    color: theme.colors.white,

    [theme.fn.smallerThan('sm')]: {
      color: theme.colors.black,
    },
  },
}));

export default useStyles;
