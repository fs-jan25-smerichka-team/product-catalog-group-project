import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      desktop: 1200,
      tablet: 640,
      mobile: 320,
    },
  },
  palette: {
    primary: {
      main: '#0F0F11',
      contrastText: '#FFF', // Figma White
    },
    secondary: {
      main: '#B4BDC3', //Figma Icons
      dark: '#89939A', //Figma Secondary
      light: '#E2E6E9', //Figma Elements
      contrastText: '#FAFBFC', // Figma Hover
    },
    warning: {
      main: '#F86800', //Figma Primary Accent
    },
    info: {
      main: '#476DF4', //Figma Secondary Accent
    },
    error: {
      main: '#EB5757', // Figma Red
    },
    success: {
      main: '#27AE60', // Figma Green
    },
  },
  typography: {
    fontFamily: 'Mont',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: '3.5rem',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 800,
      lineHeight: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: 22,
      fontWeight: 800,
      lineHeight: 31,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 26,
      letterSpacing: 0,
    },
    button: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 21,
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 800,
      lineHeight: 11,
      letterSpacing: '0.04em',
    }, // Figma UPPERCASE
    body1: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 21,
      letterSpacing: 0,
    }, // Body text
    body2: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 15,
      letterSpacing: 0,
    }, // Figma Small text
  },
});

theme.typography.h1[theme.breakpoints.down('tablet')] = {
  fontSize: 32,
  fontWeight: 800,
  lineHeight: 41,
  letterSpacing: '-0.01em',
};
theme.typography.h2[theme.breakpoints.down('tablet')] = {
  fontSize: 22,
  fontWeight: 800,
  lineHeight: 31,
  letterSpacing: 0,
};
theme.typography.h3[theme.breakpoints.down('tablet')] = {
  fontSize: 20,
  fontWeight: 700,
  lineHeight: 26,
  letterSpacing: 0,
};
theme.typography.h4[theme.breakpoints.down('tablet')] = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: 20,
  letterSpacing: 0,
};

export default theme;
