import { SxProps, Theme } from '@mui/material/styles';

export const CartGridStyle = (theme: Theme): SxProps<Theme> => ({
  maxWidth: '1136px',
  mx: 'auto',
  marginTop: { mobile: '24px', tablet: '40px' },
  bgcolor: theme.palette.secondary.contrastText,
  mt: { mobile: '24px', tablet: '40px', desktop: '40px' },
});
