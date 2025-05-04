import { SxProps, Theme } from '@mui/material';

export const paginationStyle: SxProps<Theme> = {
  width: {
    mobile: '42px',
    desktop: '72px',
  },
  height: {
    mobile: '42px',
    desktop: '72px',
  },
  padding: '4px',
  aspectRatio: '1 / 1',
  borderRadius: '4px',
  border: '1px solid',
  borderColor: 'secondary.light',
  objectFit: 'contain',
  '.swiper-slide-thumb-active &': {
    borderColor: 'primary.main',
  },
};

export const containerStyle: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: {
    mobile: '1fr',
    tablet: '1fr 6fr',
    desktop: '2fr 10fr',
  },
  gap: '16px',
  width: '100%',
};

export const mainImageStyle: SxProps<Theme> = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};
