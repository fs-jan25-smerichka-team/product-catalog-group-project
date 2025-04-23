import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { App } from './App';
import roundedOrange from './Themes/roundedOrange';

export const Root = () => {
  return (
    <ThemeProvider theme={roundedOrange}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* other pages */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
