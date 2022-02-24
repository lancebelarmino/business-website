import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  block: {
    padding: '5rem 2.5rem',
    border: '1px solid #DEE2E6',

    [theme.fn.smallerThan('md')]: {
      padding: 40,
    },

    [theme.fn.smallerThan('sm')]: {
      padding: '2.5rem 1.5rem',
    },
  },

  heading: {
    padding: '1.5rem 0 0.75rem 0',
  },
}));

export default useStyles;
