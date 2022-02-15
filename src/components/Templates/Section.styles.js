import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: 32,
  },

  content: {
    marginBottom: 200,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 100,
    },
  },

  container: {
    [theme.fn.smallerThan('md')]: {
      padding: '0 3.75rem 0 3.75rem',
    },

    [theme.fn.smallerThan('sm')]: {
      padding: '0 1.5rem 0 1.5rem',
    },
  },
}));

export default useStyles;
