import { SxProps, Theme } from '@mui/material/styles';

export const FavoriteButtonStyle = (
  isSelected: boolean,
  theme: Theme,
  size: 'small' | 'big',
): SxProps<Theme> => ({
  minWidth: size === 'small' ? '40px' : '48px',
  minHeight: '40px',
  border: '1px solid',
  borderColor: isSelected
    ? theme.palette.secondary.light
    : theme.palette.secondary.main,
  '&:hover': isSelected
    ? {
        borderColor: theme.palette.secondary.light,
      }
    : {
        borderColor: theme.palette.primary.main,
      },
});
