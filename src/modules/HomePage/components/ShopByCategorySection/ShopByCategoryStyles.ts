import { SxProps, Theme } from '@mui/material';

export const componentContainerStyle: SxProps<Theme> = {
  gap: 3,
};

export const categoryContainerStyle: SxProps<Theme> = {
  alignItems: 'center',
  justifyContent: 'center',
};

export const categoryItemStyle: Record<string, SxProps<Theme>> = {
  itemContainer: {
    width: '100%',
  },

  imageContainer: {
    width: '100%',
    minHeight: {
      mobile: '288px',
      tablet: '187px',
      desktop: '368px',
    },
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};
