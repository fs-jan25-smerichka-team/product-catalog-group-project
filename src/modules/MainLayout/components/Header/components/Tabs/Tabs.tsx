import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Tab, Tabs, Typography } from '@mui/material';

import { useActiveTabIndex } from '../../../../../../utils/hooks/useActiveTabIndex';
import favoriteIcon from '../../../../assets/icons/favorite.svg';
import cartIcon from '../../../../assets/icons/cart.svg';
import {
  tabStyles,
  tabsContainerStyles,
  iconTabsStyles,
  tabIndicatorStyles,
  verticalTabsStyles,
  textTabTypographyStyles,
  iconDrawerTabStyles,
} from './tabtsStyles';
import {
  navigationIcons,
  navigationTitles,
} from '../../../../../../constants/navigation';

interface NavigationTabsProps {
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: () => void;
  showIcons?: boolean;
  showTitles?: boolean;
  sx?: object;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  orientation = 'horizontal',
  onItemClick,
  showIcons = true,
  showTitles = true,
  sx = {},
}) => {
  const value = useActiveTabIndex(navigationTitles, navigationIcons);

  const iconMap: Record<string, string> = {
    favourites: favoriteIcon,
    cart: cartIcon,
  };

  const isLargeScreen = orientation === 'horizontal';
  const isMobileDrawerIconsOnly =
    !showTitles && showIcons && orientation === 'vertical';
  const isMobileScreen = orientation === 'vertical' || isMobileDrawerIconsOnly;

  const isTabVisible = (tabIndex: number) => {
    if (showTitles && tabIndex < navigationTitles.length) return true;
    if (showIcons && tabIndex >= navigationTitles.length) return true;
    return false;
  };

  const correctValue = isTabVisible(value) ? value : false;

  return (
    <Box sx={{ ...tabsContainerStyles, ...sx }}>
      <Tabs
        value={correctValue}
        orientation={orientation}
        variant="standard"
        textColor="primary"
        indicatorColor="primary"
        TabIndicatorProps={{
          sx: isLargeScreen ? tabIndicatorStyles : { display: 'none' },
        }}
        sx={tabsContainerStyles}
      >
        {/* Text tabs */}
        {showTitles &&
          navigationTitles.map((page, index) => (
            <Tab
              key={page}
              value={index}
              disableRipple
              component={Link}
              to={`/${page}`}
              onClick={onItemClick}
              sx={{
                ...tabStyles,
                ...(isMobileScreen && verticalTabsStyles),
                ...(isLargeScreen && {
                  marginRight:
                    index !== navigationTitles.length - 1
                      ? { tablet: '32px', desktop: '64px' }
                      : 0,
                }),
              }}
              label={
                <Typography
                  variant="subtitle1"
                  sx={
                    isMobileScreen
                      ? textTabTypographyStyles(value === index)
                      : undefined
                  }
                >
                  {page}
                </Typography>
              }
            />
          ))}

        {/* Icons tabs */}
        {showIcons &&
          navigationIcons.map((navEl, index) => {
            const tabIndex = navigationTitles.length + index;
            const isActive = value === tabIndex;

            return (
              <Tab
                key={navEl}
                value={tabIndex}
                disableRipple
                component={Link}
                to={`/${navEl}`}
                onClick={onItemClick}
                sx={{
                  ...tabStyles,
                  ...iconTabsStyles,
                  ...(isLargeScreen &&
                    index === 0 && {
                      marginLeft: 'auto',
                    }),
                  ...(isMobileDrawerIconsOnly && iconDrawerTabStyles(isActive)),
                }}
                label={
                  <Box component="span">
                    <img src={iconMap[navEl]} alt={`${navEl} icon`} />
                  </Box>
                }
              />
            );
          })}
      </Tabs>
    </Box>
  );
};
