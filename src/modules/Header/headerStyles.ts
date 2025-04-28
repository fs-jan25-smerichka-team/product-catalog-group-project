export const headerStyles = {
  bgcolor: 'primary.background',
  height: {
    mobile: '48px',
    desktop: '64px',
  },
  boxShadow: theme => `0px 1px 0px 0px ${theme.palette.secondary.light}`,
};

export const logoStyles = {
  marginRight: {
    desktop: '24px',
    tablet: '16px',
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
  boxShadow: theme => `-1px 0px 0px 0px ${theme.palette.secondary.light}`,
};

export const headerTabsContainer = {
  display: {
    mobile: 'none',
    tablet: 'flex',
  },
  width: '100%',
};
