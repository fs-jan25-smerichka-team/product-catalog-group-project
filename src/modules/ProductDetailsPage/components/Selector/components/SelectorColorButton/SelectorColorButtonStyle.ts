import { SxProps, Theme } from '@mui/material/styles';
import '../../../../../shared/colors.css';

export const selectorColorButtonStyle = (
  isSelected: boolean,
  theme: Theme,
): SxProps<Theme> => ({
  minWidth: '32px',
  width: '32px',
  height: '32px',
  padding: '0',
  borderRadius: '50%',
  backgroundColor: 'primary.contrastText',
  border: '1px solid',
  borderColor: isSelected
    ? theme.palette.primary.main
    : theme.palette.secondary.light,
  '&:hover': isSelected
    ? {
        borderColor: theme.palette.primary.main,
      }
    : {
        borderColor: theme.palette.secondary.main,
      },
});

export const innerCircleBoxStyle = (value: string): SxProps<Theme> => ({
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  backgroundColor: `var(--color-${value})`,
});
