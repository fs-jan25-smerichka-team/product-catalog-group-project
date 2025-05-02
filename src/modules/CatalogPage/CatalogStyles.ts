import { SxProps, Theme } from '@mui/material/styles';

export const titleContainerStyle: SxProps<Theme> = {
  marginTop: { mobile: '24px', tablet: '40px' },
};

export const sortingContainerStyle: SxProps<Theme> = {
  height: '59px',
  marginTop: { mobile: '32px', tablet: '40px' },
  marginBottom: '24px',
};

export const dropdownContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  height: '59px',
  width: {
    mobile: '136px',
    tablet: '187px',
    desktop: '176px',
  },
};

export const productGridContainerStyle: SxProps<Theme> = {
  marginTop: '24px',
};

export const paginationBoxStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '32px',

  marginTop: {
    mobile: '24px',
    tablet: '40px',
  },
};
