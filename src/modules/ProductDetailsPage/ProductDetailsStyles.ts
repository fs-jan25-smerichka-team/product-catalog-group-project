import { SxProps, Theme } from '@mui/material/styles';

export const backButtonBoxStyle: SxProps<Theme> = {
  display: 'flex',
  alignContent: 'flex-start',
  marginTop: {
    tablet: '40px',
    mobile: '24px',
  },
};

export const titleBoxStyle: SxProps<Theme> = {
  marginTop: '16px',
};

export const gridStyle: SxProps<Theme> = {
  bgcolor: '#ccc',
  marginBottom: {
    mobile: '56px',
    tablet: '65px',
    desktop: '80px',
  },
};

export const productDetailsPageContainerStyle: SxProps<Theme> = {
  marginBottom: { mobile: '56px', tablet: '64px', desktop: '80px' },
};
