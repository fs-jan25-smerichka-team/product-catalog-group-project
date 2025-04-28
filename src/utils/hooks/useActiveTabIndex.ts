import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useActiveTabIndex = (titles: string[], icons: string[]) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const allTabs = useMemo(() => [...titles, ...icons], [titles, icons]);

  useEffect(() => {
    const path = location.pathname.toLowerCase().split('/')[1] || '';
    const index = allTabs.indexOf(path);
    setActiveIndex(Math.max(index, 0));
  }, [location.pathname, allTabs]);

  return activeIndex;
};
