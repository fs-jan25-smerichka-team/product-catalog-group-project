import { SxProps, Theme } from '@mui/system';

export const breadcrumbsContainer: SxProps<Theme> = {
  marginTop: '24px',
  height: '16px',
};

export const homeLink: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  height: '16px',
};

export const activeBreadcrumb: SxProps<Theme> = {
  color: 'secondary.dark',
  fontWeight: 600,
};

export const breadcrumbLink: SxProps<Theme> = {
  color: 'primary.main',
};
