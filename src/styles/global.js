const globalStyles = (theme) => ({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Inter, sans-serif',
  },

  a: {
    textDecoration: 'none',
  },
});

export default globalStyles;
