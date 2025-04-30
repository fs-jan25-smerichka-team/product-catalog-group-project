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
    aspectRatio: '4 / 3',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'left top',
    display: 'block',
  },
};
