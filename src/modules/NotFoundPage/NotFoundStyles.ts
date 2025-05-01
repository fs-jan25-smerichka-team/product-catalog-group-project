import { SxProps, Theme } from '@mui/material/styles';

export const pageContainerStyle: SxProps<Theme> = {
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: {
    mobile: '24px',
    tablet: '40px',
  },
};

export const pageTitleStyle: SxProps<Theme> = {
  marginTop: {
    mobile: '24px',
    tablet: '16px',
  },
};

export const deviceSliderContainerStyle: SxProps<Theme> = {
  width: '100%',
  marginTop: {
    mobile: '40px',
    tablet: '56px',
  },
};
