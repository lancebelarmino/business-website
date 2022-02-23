import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '32px',
  },

  wrapper: {
    display: 'inline-flex',
    gap: 12,
  },
}));

export default useStyles;
