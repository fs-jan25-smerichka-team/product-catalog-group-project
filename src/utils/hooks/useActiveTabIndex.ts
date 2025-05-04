import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const useActiveTabIndex = (titles: string[], icons: string[]) => {
  const location = useLocation();

  const allTabs = useMemo(() => [...titles, ...icons], [titles, icons]);

  const path = location.pathname.toLowerCase().split('/')[1] || '';
  const index = allTabs.indexOf(path);

  return index === -1 ? 0 : index;
};
