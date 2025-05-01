import { SxProps, Theme } from '@mui/material';

export const dropdownContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  height: '59px',
  width: {
    mobile: '136px',
    tablet: '187px',
    desktop: '176px',
  },
};
