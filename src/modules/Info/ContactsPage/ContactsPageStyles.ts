import { SxProps, Theme } from '@mui/material';

export const ContactsPageStyle: Record<string, SxProps<Theme>> = {
  pageContainer: {
    marginTop: { mobile: '24px', tablet: '40px' },
    alignItems: 'start',
  },

  titleContainer: {
    marginTop: { mobile: '24px', tablet: '16px' },
    gap: 2,
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '32px',
    rowGap: 5,
    columnGap: { mobile: 2, tablet: 3, desktop: 4 },
  },

  contactsGridItem: {
    height: '100%',
  },

  articleContainer: {
    gap: 2,
  },

  titleText: {
    color: 'primary.main',
  },

  bodyText: {
    color: 'secondary.dark',
  },
};
