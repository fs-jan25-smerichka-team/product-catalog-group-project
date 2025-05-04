import { SxProps, Theme } from '@mui/material/styles';

export const OrangeButtonStyle = (isSelected: boolean): SxProps<Theme> => ({
  height: '100%',
  width: '100%',
  padding: '0',
  borderColor: isSelected ? 'warning.main' : 'secondary.light',
  '&:hover': isSelected
    ? {
        backgroundColor: 'primary.contrastText',
      }
    : {
        boxShadow: '0px 3px 13px 0px #17203166',
        backgroundColor: 'warning.main',
      },
});
