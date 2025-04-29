import { SxProps, Theme } from '@mui/material/styles';

export const cardStyle: SxProps<Theme> = {
  minWidth: '286px',
  minHeight: '440px',

  boxSizing: 'border-box',
  padding: '32px',

  borderRadius: '8px',
  border: '1px solid',
  borderColor: 'secondary.light',
  boxShadow: 'none',

  '&:hover': {
    boxShadow: '0px 2px 16px 0px #0000001A',
  },
};

export const cardContentStyle: SxProps<Theme> = {
  padding: 0,
  paddingBottom: '0px !important',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export const imageBoxStyle: SxProps<Theme> = {
  display: 'flex',
  height: {
    mobile: '130px',
    tablet: '175px',
    desktop: '196px',
  },
};

export const cardMediaStyle: SxProps<Theme> = {
  objectFit: 'contain',
};

export const nameTypographyStyle: SxProps<Theme> = {
  paddingTop: '16px',
  color: 'primary.main',
};

export const priceTypographyStyle: SxProps<Theme> = {
  color: 'primary.main',
};

export const fullPriceTypographyStyle: SxProps<Theme> = {
  textDecoration: 'line-through',
  color: 'secondary.dark',
};

export const dividerStyle: SxProps<Theme> = {
  bgcolor: 'secondary.light',
};

export const specsBoxStyle: SxProps<Theme> = {
  paddingY: '8px',
};

export const buttonBoxStyle: SxProps<Theme> = {
  height: '40px',
};
