import { SxProps, Theme } from '@mui/material/styles';

export const CartCardStyle: SxProps<Theme> = {
  padding: { mobile: '16px', tablet: '24px', desktop: '24px' },
  borderRadius: '16px',
};

export const DeleteButtonStyle: SxProps<Theme> = {
  width: '16px',
  height: '16px',
  bgcolor: 'red',
};

export const CardImageStyle: SxProps<Theme> = {
  width: '66px',
  height: '66px',
  padding: '12px',
};

export const CardTextStyle: SxProps<Theme> = {
  padding: 0,
  minWidth: '128px',
  '&:last-child': { pb: 0 },
};

export const CardActionsStyle: SxProps<Theme> = {
  height: '32px',
  width: '96px',
  bgcolor: 'navy',
  padding: 0,
};

export const CardPriceStyle: SxProps<Theme> = {
  width: '80px',
  textAlign: 'right',
  padding: 0,
  '&:last-child': { pb: 0 },
};
