import { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = {
  marginX: {
    mobile: '-16px',
    tablet: '0',
  },
};

export const sliderBoxStyle: SxProps<Theme> = {
  display: 'flex',
  gap: { tablet: '19px', desktop: '16px' },
  height: {
    mobile: '320px',
    tablet: '189px',
    desktop: '400px',
  },
  width: '100%',
};

export const slideImageStyle: SxProps<Theme> = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const paginationStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '14px',
  '& .swiper-pagination-bullet': {
    width: '14px',
    height: '4px',
    borderRadius: 0,
    backgroundColor: 'secondary.light',
    opacity: 1,
    transition: 'background-color 0.3s',
  },
  '& .swiper-pagination-bullet-active': {
    backgroundColor: 'primary.main',
  },
};
