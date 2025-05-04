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

const CommonThemeProps = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      mobileCustom: 472,
      tablet: 640,
      custom: 768,
      desktop: 1200,
    },
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
      styleOverrides: (CommonThemeProps: Theme) => ({
        body: {
          backgroundColor: CommonThemeProps.palette.background.default,
          color: CommonThemeProps.palette.text.primary,
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
    fontFamily: 'Mont, sans-serif',
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
});
CommonThemeProps.typography.h1 = {
  ...CommonThemeProps.typography.h1,
  [CommonThemeProps.breakpoints.down('tablet')]: {
    fontSize: '32px',
    fontWeight: 800,
    lineHeight: '41px',
    letterSpacing: '-0.01em',
  },
};
CommonThemeProps.typography.h2 = {
  ...CommonThemeProps.typography.h2,
  [CommonThemeProps.breakpoints.down('tablet')]: {
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: '31px',
    letterSpacing: 0,
  },
};
CommonThemeProps.typography.h3 = {
  ...CommonThemeProps.typography.h3,
  [CommonThemeProps.breakpoints.down('tablet')]: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '26px',
    letterSpacing: 0,
  },
};
CommonThemeProps.typography.h4 = {
  ...CommonThemeProps.typography.h4,
  [CommonThemeProps.breakpoints.down('tablet')]: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: 0,
  },
};

export default CommonThemeProps;
