import { SxProps, Theme } from '@mui/material/styles';

export const FavoriteButtonStyle = (
  isSelected: boolean,
  theme: Theme,
  size: 'small' | 'big',
): SxProps<Theme> => ({
  minWidth: size === 'small' ? '40px' : '48px',
  minHeight: '40px',
  border: '1px solid',
  borderColor: isSelected ? 'secondary.light' : 'secondary.main',
  '&:hover': isSelected
    ? {
        borderColor: 'secondary.light',
      }
    : {
        borderColor: 'primary.main',
      },
});
