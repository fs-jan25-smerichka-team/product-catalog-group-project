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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8px',
  height: '100%',
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

export const cardContentStyle: SxProps<Theme> = {
  padding: 0,
  paddingBottom: '0px !important',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export const nameTypographyStyle: SxProps<Theme> = {
  paddingTop: '16px',
  color: 'primary.main',
};

export const priceBoxStyle: SxProps<Theme> = {
  display: 'flex',
  gap: '8px',
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
  paddingTop: '8px',
  paddingBottom: '8px',
};

export const buttonBoxStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  height: '40px',
};
