import { SxProps, Theme } from '@mui/material/styles';

export const backButtonStyle: SxProps<Theme> = {
  color: 'secondary.dark',
  padding: 0,
  background: 'none',
  boxShadow: 'none',
  textTransform: 'none',
  minWidth: 'auto',
  '&:hover': {
    color: 'primary.main',
    background: 'none',
  },
};

export const buttonContentStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};

export const buttonTextStyle: SxProps<Theme> = {
  position: 'relative',
  top: '1px',
};

export const buttonIconStyle = {
  width: 16,
  height: 16,
};
