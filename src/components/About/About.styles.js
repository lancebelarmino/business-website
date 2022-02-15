import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    flexWrap: 'nowrap',

    [theme.fn.smallerThan('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },

  image: {
    marginRight: 90,

    [theme.fn.smallerThan('sm')]: {
      margin: '0 0 80px 0',
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
    marginBottom: 28,
    lineHeight: '32px',

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 24,
    },
  },
}));

export default useStyles;
