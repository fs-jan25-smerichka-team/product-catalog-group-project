import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { App } from './App';
import roundedOrange from './themes/roundedOrange';
import { HomePage } from './modules/HomePage';

export const Root = () => {
  return (
    <ThemeProvider theme={roundedOrange}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route index element={<HomePage />} />
          </Route>
          {/* other pages
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/:category" element={<CatalogPage />} />
          
          */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
