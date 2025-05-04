import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const AboutSectionStyle: Record<string, SxProps<Theme>> = {
  divider: {
    marginTop: '16px',
  },

  articleContainer: {
    marginTop: '32px',
  },

  articleTitle: {
    color: 'primary.main',
  },

  articleBody: {
    color: 'secondary.dark',
    marginTop: '16px',
  },
};
