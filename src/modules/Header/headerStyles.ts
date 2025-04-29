import { Theme } from '@mui/material';

export const headerStyles = {
  bgcolor: 'primary.contrastText',
  height: {
    mobile: '48px',
    desktop: '64px',
  },
  boxShadow: (theme: Theme) =>
    `0px 1px 0px 0px ${theme.palette.secondary.light}`,
};

export const logoStyles = {
  height: '28px',
  width: '80px',
  marginRight: {
    tablet: '32px',
    desktop: '48px',
  },
  marginLeft: {
    mobile: '16px',
    desktop: '24px',
  },
};

export const toolbarStyles = {
  p: 0,
  minHeight: {
    mobile: '48px',
    desktop: '64px',
  },
};

export const burgerIconBoxStyles = {
  flexGrow: 1,
  height: '100%',
  display: {
    mobile: 'flex',
    tablet: 'none',
  },
};

export const burgerButtonStyles = {
  ml: 'auto',
  width: '48px',
  p: 0,
  '& img': {
    height: '16px',
  },
  borderRadius: 0,
  boxShadow: (theme: Theme) =>
    `-1px 0px 0px 0px ${theme.palette.secondary.light}`,
};

export const headerTabsContainer = {
  display: {
    mobile: 'none',
    tablet: 'flex',
  },
  width: '100%',
};
