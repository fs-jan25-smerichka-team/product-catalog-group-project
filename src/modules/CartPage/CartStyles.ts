import { SxProps, Theme } from '@mui/material/styles';

export const CartGridStyle = (theme: Theme): SxProps<Theme> => ({
  maxWidth: '1136px',
  mx: 'auto',
  bgcolor: theme.palette.primary.contrastText,
});
