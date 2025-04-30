import { SxProps, Theme } from '@mui/material/styles';

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: {
    mobile: '24px',
    tablet: '40px',
    desktop: '40px',
  },
};

export const titleStyle: SxProps<Theme> = {
  marginBottom: '8px',
};

export const titleBoxStyle: SxProps<Theme> = {
  backgroundColor: '#8FBC8F',
};

export const sortingContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
  height: '59px',
  marginBottom: '24px',
};

export const sortBoxStyle: SxProps<Theme> = {
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
