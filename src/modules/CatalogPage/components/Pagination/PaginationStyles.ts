import { SxProps, Theme } from '@mui/material';

export const buttonStyle: SxProps<Theme> = {
  minWidth: '32px',
  height: '32px',
  borderRadius: '50%',
  padding: 0,
  borderColor: 'secondary.light',
  '&:hover': { borderColor: 'primary.main' },
};
