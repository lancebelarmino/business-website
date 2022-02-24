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
      zIndex: 999,
      color: theme.colors.black,
      fontWeight: 500,
      lineHeight: '20px',
    },
  }),

  Divider: (theme) => ({
    horizontal: {
      borderColor: theme.colors.gray[3],
    },
  }),

  TextInput: (theme) => ({
    input: {
      zIndex: 999,
      position: 'relative',
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
      zIndex: 999,
      position: 'relative',
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

  Container: (theme) => ({
    root: {
      padding: 0,
    },
  }),

  Grid: (theme) => ({
    root: {
      margin: 0,
    },
  }),

  Col: (theme) => ({
    root: {
      padding: 0,
    },
  }),
};

export default componentStyles;
