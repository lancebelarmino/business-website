import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    width: 800,
    marginBottom: 60,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  heading: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
  },

  subheading: {
    marginBottom: 12,
    lineHeight: '32px',
  },
}));

export default useStyles;
