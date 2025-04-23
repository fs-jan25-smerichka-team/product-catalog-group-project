import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

import theme from './themes/roundedOrange';

import './App.scss';

import MainLayout from './modules/MainLayout/MainLayout';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ThemeProvider>
  );
};
