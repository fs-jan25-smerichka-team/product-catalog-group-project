import { Outlet } from 'react-router-dom';

import './App.scss';

import MainLayout from './modules/MainLayout/MainLayout';

export const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
