import { SxProps, Theme } from '@mui/material';

export const cardStyle: Record<string, SxProps<Theme>> = {
  cardContainer: {
    minWidth: '320px',
    padding: 3,
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

  contactLabelText: {},
};
