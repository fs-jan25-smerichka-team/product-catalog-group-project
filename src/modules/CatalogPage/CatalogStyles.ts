import { SxProps, Theme } from '@mui/material/styles';

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: {
    mobile: '24px',
    tablet: '40px',
    desktop: '40px',
  },
  marginBottom: {
    mobile: '64px',
    tablet: '64px',
    desktop: '80px',
  },
};

export const breadcrumbsStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#F0E68C',
  height: '16px',
  marginTop: '24px',
};

export const titleStyle: SxProps<Theme> = {
  marginBottom: '8px',
};

export const titleBoxStyle: SxProps<Theme> = {
  backgroundColor: '#8FBC8F',
};

export const sortingContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
  height: '59px',
  marginBottom: '24px',
};

export const sortBoxStyle: SxProps<Theme> = {
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

export const paginationBoxStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#BC8F8F',
  height: '32px',
  marginTop: {
    mobile: '24px',
    tablet: '40px',
    desktop: '40px',
  },
};
