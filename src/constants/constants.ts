import { PerPage, ProductDetailsInfo, SortBy } from '../utils/Types';
import { getAccessories, getPhones, getTablets } from '../utils/api';

export const DEVICE_SLIDER_ITEMS_MAX = 16;

export const CATALOG_TITLES: Record<string, string> = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

export const SORTY_BY_OPTIONS: SortBy[] = [
  'Newest',
  'Alphabetically',
  'Cheapest',
];
export const PER_PAGE_OPTIONS: PerPage[] = ['4', '8', '16', 'All'];

export const CATALOG_API_CALLS: Record<
  string,
  () => Promise<ProductDetailsInfo[]>
> = {
  phones: getPhones,
  tablets: getTablets,
  accessories: getAccessories,
};

export const FOOTER_LINKS = [
  {
    text: 'Github',
    href: 'https://github.com/fs-jan25-smerichka-team/product-catalog-group-project',
  },
  { text: 'Contacts', href: '' },
  { text: 'Rights', href: '' },
];
