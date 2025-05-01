import { SxProps, Theme } from '@mui/material/styles';

export const homePageStyle: Record<string, SxProps<Theme>> = {
  titleContainer: {
    marginY: {
      mobile: '24px',
      tablet: '32px',
      desktop: '56px',
    },
  },

  contentContainer: {
    gap: {
      mobile: '56px',
      tablet: '64px',
      desktop: '80px',
    },
  },

  bannerContainer: {
    height: {
      mobile: '352px',
      tablet: '221px',
      desktop: '432px',
    },
  },

  sliderContainer: {
    height: {
      mobile: '495px',
      tablet: '577px',
      desktop: '571px',
    },
  },
};
