import { SxProps, Theme } from '@mui/material';

export const cardStyle: Record<string, SxProps<Theme>> = {
  cardContainer: {
    minWidth: '288px',
    padding: 3,

    '&:hover': {
      boxShadow: '0px 2px 16px 0px #0000001A',
    },
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },

  headerContainer: {},

  headerInfoContainer: {
    alignItems: 'center',
  },

  nameText: {},

  image: {
    height: '72px',
    width: '72px',
  },

  aboutText: { color: 'secondary.dark' },

  divider: { marginY: 1 },

  responsibleForContainer: {},

  responsibleText: {},

  contactsContainer: {},

  contactLink: {},

  contactLabelText: { color: 'secondary.dark' },
};
