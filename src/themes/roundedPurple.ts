import { createTheme, Theme } from '@mui/material/styles';

import CommonThemeProps from './commonThemeProps';

export const roundedPurple = createTheme({
  ...CommonThemeProps,
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
      main: '#4219D0', // Primary Accent
    },
    info: {
      main: '#F4BA47', // Secondary Accent
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
});
