import { Theme } from '@mui/material/styles';

export const headerStyles = {
  bgcolor: 'primary.contrastText',
  height: {
    mobile: '48px',
    desktop: '64px',
  },
  boxShadow: (theme: Theme) =>
    `0px 1px 0px 0px ${theme.palette.secondary.light}`,
};

export const headerAppIconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: {
    mobile: '48px',
    desktop: '64px',
  },
  px: {
    mobile: '16px',
    desktop: '24px',
  },
  mr: {
    tablet: '16px',
    desktop: '24px',
  },
  '& img': {
    width: {
      mobile: '64px',
      desktop: '80px',
    },
    height: {
      mobile: '22px',
      desktop: '28px',
    },
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
  borderRadius: 0,
  boxShadow: (theme: Theme) =>
    `-1px 0px 0px 0px ${theme.palette.secondary.light}`,
  '& img': {
    height: '16px',
  },
};

export const drawerStyles = {
  display: {
    mobile: 'block',
    tablet: 'none',
  },
};

export const mobileNavigationTabsStyles = {
  marginTop: '24px',
};

export const mobileNavigationIconTabsContainerStyles = {
  marginTop: 'auto',
  borderTop: (theme: Theme) => `1px solid ${theme.palette.secondary.light}`,
};

export const mobileNavigationIconTabsStyles = {
  '& .MuiTab-root': {
    flex: 1,
    '& > span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export const drawerPaperStyles = theme => {
  const headerHeightMobile = theme.shape.headerHeight.mobile;
  const headerHeightWithBorder = `${headerHeightMobile + 1}px`;

  return {
    mt: headerHeightWithBorder,
    height: `calc(100vh - ${headerHeightWithBorder})`,
    width: '100vw',
    borderRadius: 0,
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
  };
};

export const drawerModalProps = {
  BackdropProps: {
    sx: {
      backgroundColor: 'transparent',
    },
  },
};

export const desktopNavContainer = {
  display: {
    mobile: 'none',
    tablet: 'flex',
  },
  width: '100%',
  alignItems: 'center',
};
