import { SxProps, Theme } from '@mui/material/styles';

export const productDetailsStyle: Record<string, SxProps<Theme>> = {
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
};
