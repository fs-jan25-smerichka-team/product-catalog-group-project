import { createTheme, Theme } from '@mui/material/styles';

import CommonThemeProps from './commonThemeProps';

export const dark = createTheme({
  ...CommonThemeProps,
  palette: {
    mode: 'dark',
    primary: {
      main: '#F1F2F9', // Accent
      contrastText: '#0F1121', // White
    },
    secondary: {
      main: '#4A4D58', // Icons
      dark: '#75767F', // Secondary text
      light: '#3B3E4A', // Elements
      contrastText: '#323542', // Hover
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
      default: '#323542', // Hover (body background)
      paper: '#161827', // White (cards, header, footer)
    },
    text: {
      primary: '#F1F2F9', // Accent color as default text
      secondary: '#75767F', // Secondary text
    },
    divider: '#3B3E4A', // Elements (border color)
  },
});
