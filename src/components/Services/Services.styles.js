import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    width: 448,
    marginBottom: 80,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 60,
    },
  },

  heading: {
    marginBottom: 20,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
  },

  subheading: {
    lineHeight: '32px',

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 20,
    },
  },
}));

export default useStyles;
