import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

import theme from './Themes/roundedOrange';

import './App.scss';

import MainLayout from './Modules/MainLayout/MainLayout';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ThemeProvider>
  );
};
