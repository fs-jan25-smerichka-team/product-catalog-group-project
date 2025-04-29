import { PerPage, SortBy } from '../utils/Types';

export const DEVICE_SLIDER_ITEMS_MAX = 16;

export const CATALOG_TITLES: Record<string, string> = {
  '/': 'Welcome to Nice Gadgets store!',
  '/phones': 'Mobile phones',
  '/tablets': 'Tablets',
  '/accessories': 'Accessories',
  '/favourites': 'Favourites',
  '/cart': 'Cart',
};

export const SORTY_BY_OPTIONS: SortBy[] = [
  'Newest',
  'Alphabetically',
  'Cheapest',
];
export const PER_PAGE_OPTIONS: PerPage[] = ['4', '8', '16', 'All'];
