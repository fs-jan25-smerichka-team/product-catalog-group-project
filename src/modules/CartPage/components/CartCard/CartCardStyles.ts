import { SxProps, Theme } from '@mui/material/styles';

export const CartCardStyle: SxProps<Theme> = {
  padding: { mobile: '16px', tablet: '24px', desktop: '24px' },
  borderRadius: '16px',
};

export const DeleteButtonStyle: SxProps<Theme> = {
  width: '16px',
  height: '16px',
  color: 'secondary.main',

  '&:hover': { color: 'primary.main' },
};

export const CounterButtonStyle: SxProps<Theme> = {
  width: '32px',
  height: '32px',
  border: '1px solid',
  borderColor: 'secondary.main',
  color: 'primary.main',
  padding: 0,
  minWidth: 0,

  '&:hover': { borderColor: 'primary.main' },
};

export const CardImageStyle: SxProps<Theme> = {
  width: '66px',
  height: '66px',
  padding: '14px',
  backgroundOrigin: 'content-box',
};

export const CardTextStyle: SxProps<Theme> = {
  padding: 0,
  minWidth: '128px',
  textAlign: 'left',

  '&:last-child': { pb: 0 },
};

export const CardActionsStyle: SxProps<Theme> = {
  height: '32px',
  width: '96px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const CardPriceStyle: SxProps<Theme> = {
  width: '80px',
  textAlign: 'right',
  padding: 0,
  '&:last-child': { pb: 0 },
};
