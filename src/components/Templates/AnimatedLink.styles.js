import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    color: theme.colors.black,
    fontWeight: 500,
  },

  wrapper: {
    display: 'inline-flex',
    gap: 12,
  },

  icon: {
    marginTop: 2,
  },
}));

export default useStyles;
