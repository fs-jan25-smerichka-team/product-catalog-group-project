import { Link } from 'react-router-dom';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { JSX } from 'react';

import { CartIcon } from '../../../../../../assets/svg/CartIcon';
import { BadgeIcon } from '../../../../../shared/components/BadgeIcon/BadgeIcon';
import { FavouritesIcon } from '../../../../../../assets/svg/FavouritesIcon';
import { useFavouritesItems } from '../../../../../../utils/hooks/useFavouritesItems';
import { useCartItems } from '../../../../../../utils/hooks/useCartItems';
import { useActiveTabIndex } from '../../../../../../utils/hooks/useActiveTabIndex';
import {
  navigationIcons,
  navigationTitles,
} from '../../../../../../constants/navigation';
import {
  tabStyles,
  tabsContainerStyles,
  iconTabsStyles,
  tabIndicatorStyles,
  verticalTabsStyles,
  textTabTypographyStyles,
  iconDrawerTabStyles,
} from './TabsStyles.tsx';

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
  const { favouritesItems } = useFavouritesItems();
  const { totalQuantity } = useCartItems();

  const iconMap: Record<
    string,
    {
      icon: JSX.Element;
      badgeContent: number;
    }
  > = {
    favourites: {
      icon: <FavouritesIcon />,
      badgeContent: favouritesItems.length,
    },
    cart: {
      icon: <CartIcon />,
      badgeContent: totalQuantity,
    },
  };

  const isLargeScreen = orientation === 'horizontal';
  const isMobileDrawerIconsOnly =
    !showTitles && showIcons && orientation === 'vertical';
  const isMobileScreen = orientation === 'vertical' || isMobileDrawerIconsOnly;

  const isTabVisible = (tabIndex: number) => {
    if (showTitles && tabIndex < navigationTitles.length) return true;
    return !!(showIcons && tabIndex >= navigationTitles.length);
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
                  <BadgeIcon badgeContent={iconMap[navEl].badgeContent}>
                    {iconMap[navEl].icon}
                  </BadgeIcon>
                }
              />
            );
          })}
      </Tabs>
    </Box>
  );
};
