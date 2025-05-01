import { SxProps, Theme } from '@mui/material';

export const buttonBoxStyle = (size: 'small' | 'big'): SxProps<Theme> => ({
  minHeight: size === 'small' ? '40px' : '48px',
});
