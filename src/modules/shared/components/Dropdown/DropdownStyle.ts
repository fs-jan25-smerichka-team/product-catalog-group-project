import { SxProps, Theme } from '@mui/material/styles';

export const DropdownStyle = (theme: Theme): SxProps<Theme> => ({
  height: '40px',
  borderColor: theme.palette.secondary.main,
  '&:hover': {
    borderColor: theme.palette.secondary.dark,
  },
});

export const DropdownElementStyle = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.secondary.dark,
  bgcolor: theme.palette.primary.contrastText,
  '&:hover': {
    color: theme.palette.primary.main,
    bgcolor: theme.palette.secondary.contrastText,
  },
  '&:active': {
    color: theme.palette.secondary.dark,
    bgcolor: theme.palette.primary.contrastText,
  },
});
