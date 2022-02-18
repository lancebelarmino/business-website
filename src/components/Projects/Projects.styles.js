import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  heading: {
    marginBottom: 40,
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
