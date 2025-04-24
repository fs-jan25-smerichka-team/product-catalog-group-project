import { SxProps, Theme } from '@mui/material/styles';

export const OrangeButtonStyle = (
  isSelected: boolean,
  theme: Theme,
): SxProps<Theme> => ({
  height: '100%',
  width: '100%',
  borderColor: isSelected
    ? theme.palette.warning.main
    : theme.palette.secondary.light,
  '&:hover': isSelected
    ? {
        backgroundColor: theme.palette.primary.contrastText,
      }
    : {
        boxShadow: '0px 3px 13px 0px #17203166',
        backgroundColor: theme.palette.warning.main,
      },
});
