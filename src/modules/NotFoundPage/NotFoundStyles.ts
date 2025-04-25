import { SxProps, Theme } from '@mui/material/styles';

export const pageContainerStyle: SxProps<Theme> = {
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginY: {
    mobile: '24px',
    tablet: '40px',
  },
};

export const pageTitleStyle: SxProps<Theme> = {
  marginY: {
    mobile: '24px',
    tablet: '32px',
    desktop: '56px',
  },
};
