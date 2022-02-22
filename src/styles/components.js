const componentStyles = {
  Title: (theme) => ({
    root: { color: theme.colors.black },
  }),

  Text: (theme) => ({
    root: { color: theme.colors.gray[2] },
  }),

  Anchor: (theme) => ({
    root: {
      color: theme.colors.gray[2],
      transition: theme.other.transition.color,

      '&:hover': {
        color: theme.colors.black,
        textDecoration: 'none',
      },
    },
  }),

  Button: (theme) => ({
    root: {
      color: theme.colors.black,
      fontWeight: 500,
    },
  }),

  UnstyledButton: (theme) => ({
    root: {
      color: theme.colors.black,
      fontWeight: 500,
      lineHeight: '20px',
      zIndex: 999,
    },
  }),

  Divider: (theme) => ({
    horizontal: {
      marginBottom: 100,
      borderColor: theme.colors.gray[3],
    },
  }),

  TextInput: (theme) => ({
    input: {
      height: '100%',
      minHeight: '0',
      padding: '0 0 12px 0',
      margin: 0,
      border: 'none',
      borderRadius: '0',
      borderBottom: '1px solid #ADB5BD',
      background: 'none',
      fontSize: 16,
      transition: 'all 200ms ease',

      '&:focus': {
        borderColor: '#8D8F92',
      },
    },
  }),

  Textarea: (theme) => ({
    input: {
      padding: '0 0 12px 0 !important',
      border: 'none',
      borderRadius: '0',
      borderBottom: '1px solid #ADB5BD',
      background: 'none',
      fontSize: 16,
      lineHeight: '24px',
      transition: 'all 200ms ease',

      '&:focus': {
        borderColor: '#8D8F92',
      },
    },
  }),
};

export default componentStyles;
