import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  block: {
    padding: '80px 40px',
    border: '1px solid #DEE2E6',

    [theme.fn.smallerThan('md')]: {
      padding: '40px 40px',
    },

    [theme.fn.smallerThan('sm')]: {
      padding: '40px 24px',
    },
  },

  heading: {
    padding: '24px 0 12px 0',
  },
}));

export default useStyles;
