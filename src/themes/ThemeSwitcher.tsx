import React, { useContext } from 'react';
import { useTheme } from '@emotion/react';

import { Dropdown } from '../modules/shared/components/Dropdown/Dropdown';
import { ThemeList, ThemeSwitcherContext } from './ThemeSwitcherProvider';

export const ThemeSwitcher = () => {
  const setCurrTheme = useContext(ThemeSwitcherContext);
  const theme = useTheme();
  return (
    <Dropdown
      items={Object.keys(ThemeList)}
      activeItem={
        Object.entries(ThemeList).find(([k, v]) => v === theme)?.[0] || ''
      }
      onSelect={value =>
        setCurrTheme(ThemeList[value as keyof typeof ThemeList])
      }
    />
  );
};
