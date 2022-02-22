import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    alignContent: 'stretch',
  },

  infoWrapper: {
    [theme.fn.smallerThan('sm')]: {
      marginBottom: 60,
    },
  },

  infoHeader: {
    alignSelf: 'flex-start',
  },

  infoHeading: {
    marginBottom: 24,

    [theme.fn.smallerThan('sm')]: {
      marginBottom: 16,
      fontSize: 32,
      lineHeight: '40px',
    },
  },

  infoSubheading: {
    fontSize: 24,
    lineHeight: '28px',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 20,
      lineHeight: '28px',
    },
  },

  details: {
    alignItems: 'flex-end',
    width: '100%',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 28,
    },
  },

  detailsHeading: {
    marginBottom: 12,
  },

  form: { width: '100%' },

  formHeading: {
    marginBottom: 40,
  },

  formRow: {
    marginBottom: 40,
  },

  formButton: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '32px',
  },
}));

export default useStyles;
