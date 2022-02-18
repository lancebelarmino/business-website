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
};

export default componentStyles;
