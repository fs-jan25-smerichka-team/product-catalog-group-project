import { SxProps, Theme } from '@mui/material';

export const SelectorStyle: Record<string, SxProps<Theme>> = {
  selectorContainer: {
    height: '55px',
    display: 'flex',
    gap: '8px',
  },

  titleContainer: { color: 'secondary.dark' },

  optionsContainer: {
    marginTop: '8px',
    gap: '8px',
  },
};
