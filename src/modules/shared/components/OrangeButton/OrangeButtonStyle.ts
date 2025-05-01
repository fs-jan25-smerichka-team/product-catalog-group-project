import { SxProps, Theme } from '@mui/material/styles';

export const OrangeButtonStyle = (
  isSelected: boolean,
  theme: Theme,
): SxProps<Theme> => ({
  height: 'auto',
  width: '100%',
  padding: '0',
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
