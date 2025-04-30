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
  CartPage,
  CatalogPage,
  FavouritesPage,
  NotFoundPage,
  ProductDetailsPage,
  HomePage,
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
              <Route path=":productId" element={<ProductDetailsPage />} />
            </Route>
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path="cart" element={<CartPage />} />

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="/not-found" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
