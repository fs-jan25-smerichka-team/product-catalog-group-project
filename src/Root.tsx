import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { App } from './App';
import { theme } from './themes/roundedOrange';
import {
  CartPage,
  CatalogPage,
  FavoritesPage,
  NotFoundPage,
  ProductDetailsPage,
  HomePage,
} from './modules/pagesIndex';

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
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
