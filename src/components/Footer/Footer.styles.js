import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    justifyContent: 'space-between',
    marginTop: 100,

    [theme.fn.smallerThan('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      placeItems: 'center',
      rowGap: '40px',
      marginTop: 80,
    },
  },

  column1: {
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      gridColumn: '1 / span 3',
    },
  },

  column5: {
    [theme.fn.smallerThan('sm')]: {
      gridColumn: '1 / span 3',
    },
  },

  logo: {
    [theme.fn.smallerThan('sm')]: {
      margin: '0 auto 0.5rem auto',
    },
  },

  linkWrapper: {
    [theme.fn.smallerThan('sm')]: {
      gap: 40,
    },
  },
}));

export default useStyles;
