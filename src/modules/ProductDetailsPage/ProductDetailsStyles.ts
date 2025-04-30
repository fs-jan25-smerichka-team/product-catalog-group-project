import { SxProps, Theme } from '@mui/material/styles';

export const productDetailsStyle: Record<string, SxProps<Theme>> = {
  pageContainer: {
    marginBottom: { mobile: '56px', tablet: '64px', desktop: '80px' },
  },

  backButtonContainer: {
    display: 'flex',
    alignContent: 'flex-start',
    marginTop: {
      mobile: '24px',
      tablet: '40px',
    },
  },

  titleContainer: {
    marginTop: '16px',
  },

  gridContainer: {
    marginTop: { mobile: '32px', tablet: '40px' },
  },

  constrolsGridContainer: { position: 'relative' },

  productIdContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
};
