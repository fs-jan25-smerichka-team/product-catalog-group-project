import React from 'react';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';

import { HeaderTabs } from './components/Tabs/Tabs';
import { AppIcon } from '../shared/components/AppIcon/AppIcon';
import { HideOnScroll } from '../shared/components/HideOnScroll/HideOnScroll';
import burgerMenuIcon from '../../assets/icons/burger-menu.svg';
import {
  burgerIconBoxStyles,
  headerStyles,
  toolbarStyles,
  logoStyles,
  burgerButtonStyles,
  headerTabsContainer,
} from './headerStyles';

export const Header: React.FC = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" sx={headerStyles}>
          <Toolbar disableGutters={true} sx={toolbarStyles}>
            <Box sx={logoStyles}>
              <AppIcon />
            </Box>

            <Box sx={burgerIconBoxStyles}>
              <IconButton
                disableRipple
                aria-controls="menu-appbar"
                sx={burgerButtonStyles}
              >
                <img src={burgerMenuIcon} alt="burger menu icon" />
              </IconButton>

              {/* TODO: Remove Menu when original component will be ready
                Menu for mobile
              */}
            </Box>

            {/* Tabs for larger screens */}
            <Box sx={headerTabsContainer}>
              <HeaderTabs />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
