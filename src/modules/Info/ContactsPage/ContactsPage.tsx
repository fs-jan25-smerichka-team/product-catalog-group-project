import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import { BackButton } from '../../../modules/shared/components/BackButton/BackButton';
import { ContactsPageStyle } from './ContactsPageStyles';
import { MemberCard } from './components';
import daniilAvatar from '../../../assets/avatars/daniil-avatar.jfif';
import nataliiaAvatar from '../../../assets/avatars/nataliia-avatar.jfif';
import mariiaAvatar from '../../../assets/avatars/mariia-avatar.jfif';
import yaroslavAvatar from '../../../assets/avatars/yaroslav-avatar.webp';

import { MemberInfo } from '@/utils/Types';

const contactInfos: MemberInfo[] = [
  {
    name: 'Daniil Trusov',
    photo: daniilAvatar,
    about: 'Team lead, React hooks fan, Git & Jira coordinator',
    responsibleFor: [
      'Led project management with Jira and GitHub;',
      'Reviewed code and merged branches;',
      'Created custom React Hooks for product handling;',
      'Developed Product Details, Contacts, and Rights pages.',
    ],
    contacts: [
      { label: 'LinkedIn', href: 'www.linkedin.com/in/daniiltrusov00' },
      { label: 'GitHub', href: 'https://github.com/daniil-trusov' },
      { label: 'Email', href: 'mailto:daniiltrusov00@gmail.com' },
      { label: 'Telegram', href: 'https://t.me/johnny_dous' },
    ],
  },
  {
    name: 'Nataliia Verbenska',
    photo: nataliiaAvatar,
    about: 'Frontend architect and State management guru',
    responsibleFor: [
      'Built the main layout with Header and mobile navigation;',
      'Integrated TanStack and Jotai for global state;',
      'Developed full logic for Favourites and Cart;',
      'Created layout for Homepage.',
    ],
    contacts: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nataliia-verbenska-054642173',
      },
      { label: 'GitHub', href: 'https://github.com/nataliia-v' },
      { label: 'Email', href: 'mailto:nataly.verbenskaya@gmail.com' },
      { label: 'Telegram', href: 'https://t.me/v_natalia' },
    ],
  },
  {
    name: 'Mariia Koval',
    photo: mariiaAvatar,
    about: 'UI developer, Material UI & Swiper expert',
    responsibleFor: [
      'Developed Catalog and Favourites page layouts;',
      'Created Product Card and site Footer;',
      'Adapt Material UI components for project needs;',
      'Implemented Swiper sliders for banners and devices.',
    ],
    contacts: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mariia-koval-41b104350/',
      },
      { label: 'GitHub', href: 'https://github.com/kovalmaria' },
      { label: 'Email', href: 'mailto:mariia.koval.job@gmail.com' },
      { label: 'Telegram', href: 'https://t.me/mari_kov' },
    ],
  },
  {
    name: 'Yaroslav Holovchenko',
    photo: yaroslavAvatar,
    about: 'UI stylist, Material UI expert, UX support',
    responsibleFor: [
      'Designed and implemented a custom Material UI theme;',
      'Created Cart page and Cart Card component;',
      'Adapted dropdowns and modals using MUI;',
      'Built Checkout modal window.',
    ],
    contacts: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/holyar' },
      { label: 'GitHub', href: 'https://github.com/ENigmusSS' },
      { label: 'Email', href: 'mailto:fsgolovchenkoyaroslav@gmail.com' },
      { label: 'Telegram', href: 'https://t.me/Hedera_intramongolica' },
    ],
  },
];

export const ContactsPage: React.FC = () => {
  return (
    <Stack sx={ContactsPageStyle.pageContainer}>
      <BackButton />

      <Stack sx={ContactsPageStyle.titleContainer}>
        <Typography variant="h2" sx={ContactsPageStyle.titleText}>
          Meet the team behind the Nice Gadgets store!
        </Typography>

        <Typography variant="body1" sx={ContactsPageStyle.bodyText}>
          We're Sanatoriy Smerichka team, and here is some information about us
          if you are interested or want to contact.
        </Typography>
      </Stack>

      <Grid container sx={ContactsPageStyle.contentContainer}>
        {contactInfos.map(contactInfo => (
          <Grid
            key={contactInfo.name}
            columns={{ mobile: 12, tablet: 6 }}
            sx={ContactsPageStyle.contactsGridItem}
          >
            <MemberCard memberInfo={contactInfo} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
