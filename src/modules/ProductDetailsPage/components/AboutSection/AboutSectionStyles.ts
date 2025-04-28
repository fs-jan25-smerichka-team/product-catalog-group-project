import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

import { theme } from '../../../../themes/roundedOrange';

export const AboutSectionStyle: Record<string, SxProps<Theme>> = {
  divider: {
    marginTop: '16px',
  },

  articleContainer: {
    marginTop: '32px',
  },

  articleTitle: {
    color: theme.palette.primary.main,
  },

  articleBody: {
    color: theme.palette.secondary.dark,
    marginTop: '16px',
  },
};
