import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  heading: {
    margin: '160px 0',

    [theme.fn.smallerThan('sm')]: {
      margin: '100px 0',
      fontSize: 48,
      lineHeight: '60px',
    },
  },
}));

export default useStyles;
