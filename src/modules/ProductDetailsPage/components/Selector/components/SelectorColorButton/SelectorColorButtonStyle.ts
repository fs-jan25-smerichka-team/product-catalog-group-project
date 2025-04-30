import { SxProps, Theme } from '@mui/material/styles';
import '../../../../../shared/colors.css';

export const selectorColorButtonStyle = (
  value: string,
  isSelected: boolean,
): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '32px',
  height: '32px',
  minWidth: '32px',

  borderRadius: '50%',
  borderWidth: '1px',
  borderColor: 'secondary.main',
  backgroundColor: `var(--color-${value})`,
  boxShadow: 'none',

  '&:focus': {
    boxShadow: 'none',
  },

  '&:hover': {
    borderColor: 'primary.main',
    boxShadow: 'none',
  },

  ...(isSelected && {
    borderColor: 'primary.main',
    boxShadow: 'none',
  }),
});
