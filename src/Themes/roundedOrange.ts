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
      fontSize: '48px',
      fontWeight: 800,
      lineHeight: '56px',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 800,
      lineHeight: '40px',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '22px',
      fontWeight: 800,
      lineHeight: '31px',
      letterSpacing: 0,
    },
    h4: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '26px',
      letterSpacing: 0,
    },
    button: {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '21px',
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 800,
      lineHeight: '11px',
      letterSpacing: '0.04em',
    }, // Figma UPPERCASE
    body1: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 21,
      letterSpacing: 0,
    }, // Body text
    body2: {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '15px',
      letterSpacing: 0,
    }, // Figma Small text
  },
});

theme.typography.h1[theme.breakpoints.down('tablet')] = {
  fontSize: '32px',
  fontWeight: 800,
  lineHeight: '41px',
  letterSpacing: '-0.01em',
};
theme.typography.h2[theme.breakpoints.down('tablet')] = {
  fontSize: '22px',
  fontWeight: 800,
  lineHeight: '31px',
  letterSpacing: 0,
};
theme.typography.h3[theme.breakpoints.down('tablet')] = {
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '26px',
  letterSpacing: 0,
};
theme.typography.h4[theme.breakpoints.down('tablet')] = {
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '20px',
  letterSpacing: 0,
};

export default theme;
