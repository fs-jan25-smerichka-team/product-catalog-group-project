import { SxProps, Theme } from '@mui/material/styles';

export const CartSummaryCardStyle: SxProps<Theme> = {
  padding: '24px',
  borderRadius: '16px',
};

export const CartSummaryContentStyle: SxProps<Theme> = { p: 0 };

export const CartSummaryDividerStyle = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.secondary.light,
});
