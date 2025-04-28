import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, Box, Typography } from '@mui/material';

import { useActiveTabIndex } from '../../../../utils/hooks/useActiveTabIndex';
import {
  navigationIcons,
  navigationTitles,
} from '../../../../constants/navigation';
import favoriteIcon from '../../../../assets/icons/favorite.svg';
import cartIcon from '../../../../assets/icons/cart.svg';
import {
  tabStyles,
  tabIndicatorStyles,
  tabsContainer,
  iconTabsStyles,
} from './tabtsStyles';

export const HeaderTabs: React.FC = () => {
  const value = useActiveTabIndex(navigationTitles, navigationIcons);

  const iconMap: Record<string, string> = {
    favourites: favoriteIcon,
    cart: cartIcon,
  };

  return (
    <Box sx={tabsContainer}>
      <Tabs value={value} TabIndicatorProps={{ sx: tabIndicatorStyles }}>
        {/* text tabs */}
        {navigationTitles.map((page, index) => (
          <Tab
            key={page}
            disableRipple
            component={Link}
            to={`/${page}`}
            sx={{
              ...tabStyles,
              marginRight: {
                tablet: index !== navigationTitles.length - 1 ? '32px' : 0,
                desktop: index !== navigationTitles.length - 1 ? '64px' : 0,
              },
            }}
            label={
              <Typography
                variant="subtitle1"
                sx={{
                  color: value === index ? 'primary.main' : 'secondary.dark',
                }}
              >
                {page}
              </Typography>
            }
          />
        ))}

        {/* icon tabs */}
        {navigationIcons.map((navEl, i) => {
          const tabIndex = navigationTitles.length + i;
          return (
            <Tab
              key={navEl}
              value={tabIndex}
              disableRipple
              component={Link}
              to={`/${navEl}`}
              icon={<img src={iconMap[navEl] || ''} alt={`${navEl} icon`} />}
              sx={{
                ...tabStyles,
                ...iconTabsStyles,
                marginLeft: i === 0 ? 'auto' : undefined,
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};
