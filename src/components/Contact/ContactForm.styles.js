import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  form: { position: 'relative', width: '100%' },

  formGroup: {
    marginBottom: 60,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  heading: {
    marginBottom: 60,
  },

  row: {
    position: 'relative',
  },

  lastRow: {
    marginBottom: 60,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 48,
    },
  },

  floatingLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: theme.colors.gray[1],
    fontSize: 16,
  },

  floatingLabelTextarea: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: theme.colors.gray[1],
    lineHeight: '24px',
    fontSize: 16,
  },

  errorInput: {
    borderColor: theme.colors.invalid,
  },

  errorIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  errorMessage: {
    position: 'absolute',
    bottom: -40,
    fontSize: 14,
    color: theme.colors.invalid,
  },

  success: {
    position: 'absolute',
    bottom: -32,
  },

  successMessage: {
    color: theme.colors.success,
  },
}));

export default useStyles;
