import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    justifyContent: 'space-between',
    marginTop: 100,

    [theme.fn.smallerThan('sm')]: {
      gridTemplateColumns: 'repeat(3, auto)',
      rowGap: '40px',
      marginTop: 80,
    },
  },

  logo: {
    [theme.fn.smallerThan('sm')]: {
      marginBottom: 20,
    },
  },

  column1: {
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      gridColumn: '1 / span 3',
    },
  },

  linkWrapper: {
    [theme.fn.smallerThan('sm')]: {
      gap: 40,
    },
  },
}));

export default useStyles;
