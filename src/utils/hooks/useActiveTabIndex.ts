import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const headerPaths = [
  '',
  'home',
  'phones',
  'tablets',
  'accessories',
  'favourites',
  'cart',
];

export const useActiveTabIndex = (titles: string[], icons: string[]) => {
  const location = useLocation();

  const allTabs = useMemo(() => [...titles, ...icons], [titles, icons]);
  const path = location.pathname.toLowerCase().split('/')[1] || '';
  const index = headerPaths.includes(path) ? allTabs.indexOf(path) : -2;

  return index === -1 ? 0 : index;
};
