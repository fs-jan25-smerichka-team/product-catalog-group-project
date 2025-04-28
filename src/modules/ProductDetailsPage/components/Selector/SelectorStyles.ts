import { SxProps, Theme } from '@mui/material';

export const SelectorStyle: Record<string, SxProps<Theme>> = {
  selectorContainer: {
    height: '55px',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    border: 'none',
    '& .MuiToggleButtonGroup-grouped': {
      border: 'none',
      borderRadius: 2,
      marginRight: 1,
      '&:last-of-type': {
        marginRight: 0,
      },
    },
  },

  titleContainer: { color: 'secondary.dark' },

  optionsContainer: {
    marginTop: '8px',
    gap: '8px',
  },
};
