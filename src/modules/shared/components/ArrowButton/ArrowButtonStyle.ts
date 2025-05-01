import { SxProps, Theme } from '@mui/material/styles';

export const ArrowButtonStyle = (
  theme: Theme,
  isBtnDisabled: boolean,
): SxProps<Theme> => ({
  height: '100%',
  width: '32px',
  borderRadius: '48px',

  border: '1px solid',
  borderColor: isBtnDisabled
    ? theme.palette.secondary.light
    : theme.palette.secondary.main,
  '&:hover': isBtnDisabled
    ? {
        borderColor: theme.palette.secondary.light,
      }
    : {
        borderColor: theme.palette.primary.main,
      },
});
