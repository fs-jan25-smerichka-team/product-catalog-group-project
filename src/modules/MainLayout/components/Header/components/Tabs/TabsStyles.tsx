import { Theme } from '@mui/material';

export const tabsContainerStyles = {
  width: '100%',
  '& .MuiTabs-flexContainer': {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

export const tabStyles = {
  height: {
    tablet: '48px',
    desktop: '64px',
  },
  p: 0,
  minWidth: '20px',
  '&.Mui-selected, &:hover': {
    color: 'primary.main',
  },
};

export const tabIndicatorStyles = {
  height: '3px',
  transition: 'none',
};

export const iconTabsStyles = {
  width: {
    tablet: '48px',
    desktop: '64px',
  },
  color: 'primary.main',
  boxShadow: (theme: Theme) =>
    `-1px 0px 0px 0px ${theme.palette.secondary.light}`,
  '& img': {
    height: '16px',
    display: 'block',
    margin: '0 auto',
  },
};

export const verticalTabsStyles = {
  minHeight: '27px',
  marginBottom: '16px',
  minWidth: '100%',
};

export const textTabTypographyStyles = (isActive: boolean) => ({
  borderBottom: isActive ? '3px solid' : '3px solid transparent',
  borderColor: isActive ? 'primary.main' : 'transparent',
  paddingBottom: '5px',
});

export const iconDrawerTabStyles = (isActive: boolean) => ({
  flex: 1,
  width: '100%',
  borderBottom: isActive ? '3px solid black' : '3px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    display: 'block',
    margin: '0 auto',
  },
});
