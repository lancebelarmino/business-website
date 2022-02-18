import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  block: {
    width: '100%',
    height: 620,

    [theme.fn.smallerThan('md')]: {
      height: 464,
    },

    [theme.fn.smallerThan('sm')]: {
      height: 420,
    },
  },

  image: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: 48,

    [theme.fn.smallerThan('md')]: {
      padding: 24,
    },
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.7);',
  },
}));

export default useStyles;
