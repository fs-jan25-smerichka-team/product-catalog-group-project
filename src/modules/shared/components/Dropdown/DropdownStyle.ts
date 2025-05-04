import { SxProps, Theme } from '@mui/material/styles';

export const DropdownStyle: SxProps<Theme> = {
  height: '40px',
  borderColor: 'secondary.main',
  '&:hover': {
    borderColor: 'secondary.dark',
  },
};

export const DropdownElementStyle: SxProps<Theme> = {
  color: 'secondary.dark',
  bgcolor: 'primary.contrastText',

  '&:hover': {
    color: 'primary.main',
    bgcolor: 'secondary.contrastText',
  },
  '&.Mui-selected': {
    color: 'primary.main',
    bgcolor: 'secondary.light' + ' !important',
  },
};
