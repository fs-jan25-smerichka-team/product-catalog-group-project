import React, { createContext, useState } from 'react';
import { Theme } from '@mui/material/styles';

import { roundedOrange } from './roundedOrange';
import { roundedPurple } from './roundedPurple';
import { roundedBlue } from './roundedBlue';
import { dark } from './dark';
import { ultracontrastBlack } from './ultracontrastBlack';

export const ThemeList = {
  orange: roundedOrange,
  purple: roundedPurple,
  blue: roundedBlue,
  dark: dark,
  highcontrast: ultracontrastBlack,
};

export const ThemeSwitcherContext = createContext<(theme: Theme) => void>(
  () => {},
);

interface Props {
  children: React.ReactNode;
  setCurrTheme: (theme: Theme) => void;
}

export const ThemeSwitcherProvider: React.FC<Props> = ({
  children,
  setCurrTheme,
}) => {
  return (
    <ThemeSwitcherContext.Provider value={setCurrTheme}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
};
