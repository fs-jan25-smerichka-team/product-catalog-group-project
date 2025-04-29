import { SxProps, Theme } from '@mui/material/styles';

export const blackButtonStyle = (isSelected: boolean): SxProps<Theme> => ({
  paddingInline: '8px',
  paddingBlock: '7px 4px',
  borderColor: isSelected ? 'primary.main' : 'secondary.main',
  '&:hover': {
    backgroundColor: isSelected ? 'primary.main' : 'secondary.light',
  },
});
