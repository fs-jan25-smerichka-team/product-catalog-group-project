import { SxProps, Theme } from '@mui/material';

export const specsInfoStyle: Record<string, SxProps<Theme>> = {
  specsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  rowBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  rowLabel: { color: 'secondary.dark' },

  rowValue: { color: 'primary.main' },
};
