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

  Menu: (theme) => ({
    root: {
      backgroundColor: 'red',
    },

    body: {
      position: 'fixed',
      top: 0,
      left: '0px',
      border: 'none',
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
};

export default componentStyles;
