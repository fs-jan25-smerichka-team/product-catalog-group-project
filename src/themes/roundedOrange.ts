import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    mobileCustom: true;
    tablet: true;
    custom: true;
    desktop: true;
  }

  interface Shape {
    headerHeight: {
      mobile: number;
      desktop: number;
    };
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      mobileCustom: 472,
      tablet: 640,
      custom: 768,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: '#0F0F11', // Accent
      contrastText: '#FFF', // White
    },
    secondary: {
      main: '#B4BDC3', // Icons
      dark: '#89939A', // Secondary text
      light: '#E2E6E9', // Elements
      contrastText: '#FAFBFC', // Hover
    },
    warning: {
      main: '#F86800', // Primary Accent
    },
    info: {
      main: '#476DF4', // Secondary Accent
    },
    error: {
      main: '#EB5757', // Red
    },
    success: {
      main: '#27AE60', // Green
    },
    background: {
      default: '#FAFBFC', // Hover (body background)
      paper: '#FFF', // White (cards, header, footer)
    },
    text: {
      primary: '#0F0F11', // Accent color as default text
      secondary: '#89939A', // Secondary text
    },
    divider: '#E2E6E9', // Elements (border color)
  },
  components: {
    MuiGrid: {
      defaultProps: {
        columns: {
          mobile: 4,
          tablet: 12,
          desktop: 24,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme: Theme) => ({
        body: {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          margin: 0,
        },
        h1: { margin: 0 },
        h2: { margin: 0 },
        h3: { margin: 0 },
        h4: { margin: 0 },
      }),
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
      textTransform: 'none',
    },
    subtitle1: {
      // Figma UPPERCASE
      fontSize: '12px',
      fontWeight: 800,
      lineHeight: '11px',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '21px',
      letterSpacing: 0,
    },
    body2: {
      // Figma small text
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '15px',
      letterSpacing: 0,
    },
  },
  /*shape: {
    headerHeight: {
      mobile: 48,
      desktop: 64,
    },
  },*/
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('tablet')]: {
    fontSize: '32px',
    fontWeight: 800,
    lineHeight: '41px',
    letterSpacing: '-0.01em',
  },
};
theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down('tablet')]: {
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: '31px',
    letterSpacing: 0,
  },
};
theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('tablet')]: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '26px',
    letterSpacing: 0,
  },
};
theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('tablet')]: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: 0,
  },
};
