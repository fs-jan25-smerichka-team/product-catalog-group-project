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
  ProductDetailsPage,
  FavouritesPage,
  CartPage,
  ContactsPage,
  RightsPage,
  NotFoundPage,
} from './modules/pagesIndex';
import { ScrollToTop } from './utils/ScrollToTop';

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            <Route path=":category">
              <Route index element={<CatalogPage />} />
              <Route path=":productId" element={<ProductDetailsPage />} />
            </Route>

            <Route path="favourites" element={<FavouritesPage />} />
            <Route path="cart" element={<CartPage />} />

            <Route path="contacts" element={<ContactsPage />} />
            <Route path="rights" element={<RightsPage />} />

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="/not-found" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
