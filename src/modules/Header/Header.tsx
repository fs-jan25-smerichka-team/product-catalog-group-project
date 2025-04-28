import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  MenuItem,
  IconButton,
  Menu,
} from '@mui/material';

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
import { navigationTitles } from '../../constants/navigation';

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" sx={headerStyles}>
          <Toolbar disabledgutters="true" sx={toolbarStyles}>
            <AppIcon sx={logoStyles} />

            <Box sx={burgerIconBoxStyles}>
              <IconButton
                disableRipple
                aria-controls="menu-appbar"
                onClick={handleOpenNavMenu}
                sx={burgerButtonStyles}
              >
                <img src={burgerMenuIcon} alt="burger menu icon" />
              </IconButton>

              {/* TODO: Remove Menu when original component will be ready
                Menu for mobile
              */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    mobile: 'block',
                    tablet: 'none',
                  },
                }}
              >
                {navigationTitles.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={`/${page}`}>{page}</Link>
                  </MenuItem>
                ))}
              </Menu>
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
