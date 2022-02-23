import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  heading: {
    margin: '100px 0 40px 0',
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
