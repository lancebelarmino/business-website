import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    alignContent: 'stretch',
  },

  infoWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },

  details: {
    width: '100%',
  },

  detailsBlock: {
    marginRight: 80,
  },

  detailsHeading: {
    marginBottom: 16,
  },

  heading: {
    marginBottom: 24,
  },

  subheading: {
    fontSize: 24,
    lineHeight: '28px',
  },

  form: { width: 620 },

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
