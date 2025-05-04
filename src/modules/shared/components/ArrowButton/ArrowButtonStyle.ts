import { SxProps, Theme } from '@mui/material/styles';

export const ArrowButtonStyle = (isBtnDisabled: boolean): SxProps<Theme> => ({
  height: '100%',
  width: '32px',
  borderRadius: '48px',
  color: 'primary.main',
  border: '1px solid',
  borderColor: isBtnDisabled ? 'secondary.light' : 'secondary.main',
  '&:hover': isBtnDisabled
    ? {
        borderColor: 'secondary.light',
      }
    : {
        borderColor: 'primary.main',
      },
});
