const lightTheme = {
  colorScheme: 'light',

  colors: {
    white: '#FFFFFF',
    black: '#212529',
    gray: ['#DEE2E6', '#ADB5BD', '#8D8F92'],
  },

  fontFamily: 'Inter, sans-serif',
  lineHeight: 0,
  fontSizes: {
    xs: 10,
    sm: 14,
    md: 16,
    lg: 18,
  },

  headings: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    sizes: {
      h1: { fontSize: 64, lineHeight: '80px' },
      h2: { fontSize: 48, lineHeight: '60px' },
      h3: { fontSize: 32, lineHeight: '40px' },
      h4: { fontSize: 24, lineHeight: '34px' },
      h5: { fontSize: 16, lineHeight: '20px' },
    },
  },

  other: {
    transition: {
      fill: 'fill 200ms ease',
      stroke: 'stroke 200ms ease',
      color: 'color 200ms ease',
    },
  },
};

export default lightTheme;
