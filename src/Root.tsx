import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

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
import { ThemeSwitcherProvider } from './themes/ThemeSwitcherProvider';
import { roundedOrange } from './themes/roundedOrange';

export const Root = () => {
  const [currTheme, setCurrTheme] = useState<Theme>(roundedOrange);
  return (
    <ThemeSwitcherProvider setCurrTheme={setCurrTheme}>
      <ThemeProvider theme={currTheme}>
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
    </ThemeSwitcherProvider>
  );
};
