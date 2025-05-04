import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  useTheme,
} from '@mui/material';

import { AppIcon } from '../../../shared/components/AppIcon/AppIcon';
import { HideOnScroll } from '../../../shared/components/HideOnScroll/HideOnScroll';
import { NavigationTabs } from './components/Tabs/Tabs';
import burgerMenuIcon from '../../../../assets/icons/burger-menu.svg';
import closeMenuIcon from '../../../../assets/icons/close.svg';
import {
  burgerIconBoxStyles,
  headerStyles,
  toolbarStyles,
  headerAppIconStyles,
  burgerButtonStyles,
  drawerStyles,
  drawerModalProps,
  drawerPaperStyles,
  mobileNavigationTabsStyles,
  mobileNavigationIconTabsStyles,
  mobileNavigationIconTabsContainerStyles,
  desktopNavContainer,
} from './headerStyles';

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();

  const handleOpenNavMenu = () => setIsDrawerOpen(true);
  const handleCloseNavMenu = () => setIsDrawerOpen(false);

  return (
    <HideOnScroll>
      <AppBar position="sticky" sx={headerStyles}>
        <Toolbar disableGutters sx={toolbarStyles}>
          <AppIcon sx={headerAppIconStyles} />
          <Box sx={burgerIconBoxStyles}>
            <IconButton
              disableRipple
              aria-controls="menu-appbar"
              onClick={isDrawerOpen ? handleCloseNavMenu : handleOpenNavMenu}
              sx={burgerButtonStyles}
            >
              {isDrawerOpen ? (
                <img src={closeMenuIcon} alt="close menu icon" />
              ) : (
                <img src={burgerMenuIcon} alt="burger menu icon" />
              )}
            </IconButton>
            <Drawer
              open={isDrawerOpen}
              onClose={handleCloseNavMenu}
              ModalProps={drawerModalProps}
              PaperProps={{
                sx: drawerPaperStyles(theme),
              }}
              sx={drawerStyles}
            >
              <NavigationTabs
                orientation="vertical"
                onItemClick={handleCloseNavMenu}
                showIcons={false}
                showTitles={true}
                sx={mobileNavigationTabsStyles}
              />

              <Box sx={mobileNavigationIconTabsContainerStyles}>
                <NavigationTabs
                  orientation="horizontal"
                  onItemClick={handleCloseNavMenu}
                  showIcons={true}
                  showTitles={false}
                  sx={mobileNavigationIconTabsStyles}
                />
              </Box>
            </Drawer>
          </Box>

          <Box sx={desktopNavContainer}>
            <NavigationTabs />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
