import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  heading: {
    margin: '6.25rem 0 2.5rem 0',
  },

  wrapper: {
    gap: 40,
    margin: 0,

    [theme.fn.smallerThan('sm')]: {
      gap: 28,
    },
  },
}));

export default useStyles;
