import { SxProps, Theme } from '@mui/material/styles';

export const selectorButtonStyle = (isSelected: boolean): SxProps<Theme> => ({
  paddingInline: '8px',
  paddingBlock: '7px 4px',
  height: '32px',

  borderRadius: '4px',
  borderWidth: '1px',
  borderColor: 'secondary.main',
  color: 'primary.main',
  backgroundColor: 'transparent',
  boxShadow: 'none',

  '&:focus': {
    boxShadow: 'none',
  },

  '&:hover': {
    borderColor: 'primary.main',
    boxShadow: 'none',
  },

  ...(isSelected && {
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    boxShadow: 'none',
  }),
});
