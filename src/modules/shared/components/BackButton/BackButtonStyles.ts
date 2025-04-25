import { SxProps, Theme } from '@mui/material/styles';

export const backButtonStyle: SxProps<Theme> = {
  color: '#89939A',
  padding: 0,
  background: 'none',
  boxShadow: 'none',
  textTransform: 'none',
  minWidth: 'auto',
  '&:hover': {
    color: '#0f0f11',
    background: 'none',
  },
};

export const buttonContentStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};

export const buttonTextStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};
