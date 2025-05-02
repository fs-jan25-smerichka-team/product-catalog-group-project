import { SxProps, Theme } from '@mui/material';

export const RightsPageStyle: Record<string, SxProps<Theme>> = {
  pageContainer: {
    marginTop: { mobile: '24px', tablet: '40px' },
    alignItems: 'start',
  },

  titleContainer: {
    marginTop: { mobile: '24px', tablet: '16px' },
    gap: 2,
  },

  contentContainer: {
    marginTop: '32px',
    gap: 4,
  },

  articleContainer: {
    gap: 2,
  },

  titleText: {
    color: 'primary.main',
  },

  bodyText: {
    color: 'secondary.dark',
  },
};
