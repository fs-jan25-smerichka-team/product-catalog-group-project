import { SxProps, Theme } from '@mui/material/styles';

import theme from '../../../../themes/roundedOrange';

export const backButtonStyle: SxProps<Theme> = {
  color: theme.palette.secondary.dark,
  padding: 0,
  background: 'none',
  boxShadow: 'none',
  textTransform: 'none',
  minWidth: 'auto',
  '&:hover': {
    color: theme.palette.primary.main,
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
