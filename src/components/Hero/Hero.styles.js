import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  intro: {
    margin: '10rem 0',

    [theme.fn.smallerThan('sm')]: {
      margin: '6.25rem 0',
    },
  },

  heading: {
    marginBottom: 40,

    [theme.fn.smallerThan('sm')]: {
      margin: '2rem 0',
      fontSize: 48,
      lineHeight: '60px',
    },
  },
}));

export default useStyles;
