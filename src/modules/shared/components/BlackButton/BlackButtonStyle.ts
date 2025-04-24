import { SxProps, Theme } from '@mui/material/styles';

export const BlackButtonStyle = (
  isSelected: boolean,
  theme: Theme,
): SxProps<Theme> => ({
  height: '100%',
  width: '100%',
  borderColor: isSelected
    ? theme.palette.primary.main
    : theme.palette.secondary.main,
  '&:hover': isSelected
    ? {
        backgroundColor: theme.palette.primary.main,
      }
    : {
        boxShadow: '0px 3px 13px 0px #17203166',
        backgroundColor: theme.palette.secondary.main,
      },
});
