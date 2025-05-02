import { SxProps, Theme } from '@mui/material/styles';

export const boxStyle: SxProps<Theme> = {
  width: '100%',
  boxShadow: (theme: Theme) =>
    `0px -1px 0px 0px ${theme.palette.secondary.light}`,
  backgroundColor: 'background.paper',
  height: {
    mobile: '257px',
    tablet: '96px',
  },
  marginTop: {
    mobile: '56px',
    tablet: '64px',
    desktop: '80px',
  },
};

export const flexBoxStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: {
    mobile: 'column',
    tablet: 'row',
  },
  padding: {
    mobile: '32px 16px',
    tablet: '32px',
  },
  alignItems: { tablet: 'center' },
  gap: {
    mobile: '32px',
  },
};

export const contactsStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { mobile: 'column', tablet: 'row' },
  gap: { mobile: '16px', tablet: '13px', desktop: '106px' },
};

export const backToTopStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
};

export const iconButtonStyle: SxProps<Theme> = {
  width: '32px',
  height: '32px',
  border: '1px solid',
  borderColor: 'secondary.main',
  '&:hover': {
    borderColor: 'primary.main',
    backgroundColor: 'background.paper',
  },
};

export const backToTopTextStyle: SxProps<Theme> = {
  color: 'secondary.dark',
};

export const logoBoxStyle: SxProps<Theme> = {
  height: '32px',
  display: 'flex',
};

export const contactsLinkStyle = {
  textDecoration: 'none',
  color: 'secondary.dark',
  '&:hover': {
    color: 'primary.main',
  },
};

export const backButtonBoxStyle: SxProps<Theme> = {
  display: 'flex',
  alignContent: 'flex-start',
  marginTop: {
    tablet: '40px',
    mobile: '24px',
  },
};
