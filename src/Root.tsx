import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './themes/roundedOrange';
import { App } from './App';
import {
  HomePage,
  CatalogPage,
  NotFoundPage,
  ProductDetailsPage,
  CartPage,
  FavoritesPage,
} from './modules/pagesIndex';

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path=":category">
              <Route index element={<CatalogPage />} />
              <Route path=":deviceId" element={<ProductDetailsPage />} />
            </Route>
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
