export const tabsContainer = {
  width: '100%',
};

export const tabStyles = {
  height: {
    tablet: '48px',
    desktop: '64px',
  },
  p: 0,
  minWidth: '20px',
  '&.Mui-selected': {
    color: 'primary.main',
  },
};

export const tabIndicatorStyles = {
  height: '3px',
};

export const iconTabsStyles = {
  width: {
    tablet: '48px',
    desktop: '64px',
  },
  boxShadow: theme => `-1px 0px 0px 0px ${theme.palette.secondary.light}`,
  '& img': {
    height: '16px',
  },
};
