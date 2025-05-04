import { createTheme, Theme } from '@mui/material/styles';

import CommonThemeProps from './commonThemeProps';

export const ultracontrastBlack = createTheme({
  ...CommonThemeProps,
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF', // Accent
      contrastText: '#000', // White
    },
    secondary: {
      main: '#F0F', // Icons
      dark: '#FF0', // Secondary text
      light: '#F0F', // Elements
      contrastText: '#000', // Hover
    },
    warning: {
      main: '#FF0', // Primary Accent
    },
    info: {
      main: '#00F', // Secondary Accent
    },
    error: {
      main: '#F00', // Red
    },
    success: {
      main: '#0F0', // Green
    },
    background: {
      default: '#000', // Hover (body background)
      paper: '#444', // White (cards, header, footer)
    },
    text: {
      primary: '#FFF', // Accent color as default text
      secondary: '#FF0', // Secondary text
    },
    divider: '#F0F', // Elements (border color)
  },
});
