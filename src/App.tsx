import { ThemeProvider } from '@mui/material/styles';

import theme from './Themes/roundedOrange';
import './App.scss';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>There's no page yet :(</>
    </ThemeProvider>
  );
};
