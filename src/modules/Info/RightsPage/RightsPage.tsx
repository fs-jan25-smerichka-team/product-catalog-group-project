import { Stack, Typography } from '@mui/material';
import React from 'react';

import { BackButton } from '../../../modules/shared/components/BackButton/BackButton';
import { RightsPageStyle } from './RightsPageStyles';

const rightsText = [
  {
    title: '1. Ownership and Copyright',
    text: 'All materials posted on the site, including text, graphics, images, logos, design, software, trademarks, domain names and other content elements, are the property of Sanatoriy Smerichka team and are protected by copyright and intellectual property laws.',
  },
  {
    title: '2. Use of materials',
    text: 'You have the right to view, download or print materials from the website only for personal, non-commercial use. All other forms of use of materials, including copying, distribution, publication or sale, are prohibited without prior written consent.',
  },
  {
    title: '3. Copy protection',
    text: 'The materials on this site are protected from unauthorized copying. The use of automatic scripts, bots or other means to collect or copy materials without permission is a violation of the terms of use.',
  },
  {
    title: '4. Privacy Policy',
    text: 'We care about your privacy. We do not use or store any of your Personal Data on the website, except for data about orders and favourite products on this website.',
  },
  {
    title: '5. Changes and Updates',
    text: 'We reserve the right to change or update these terms at any time. Any changes will be effective upon posting on the site. We recommend that you periodically review these terms to stay informed of any changes.',
  },
  {
    title: '6. Liability',
    text: 'We are not responsible for any losses or damages that may arise from the use of our site. Use of the site is at your own discretion and risk.',
  },
  {
    title: '7. Contact Us',
    text: 'If you have any questions or comments regarding these terms, please feel free to contact us. You can find team contacts on Contacts page',
  },
];

export const RightsPage: React.FC = () => {
  return (
    <Stack sx={RightsPageStyle.pageContainer}>
      <BackButton />

      <Stack sx={RightsPageStyle.titleContainer}>
        <Typography variant="h2" sx={RightsPageStyle.titleText}>
          Welcome to Nice Gadgets store!
        </Typography>

        <Typography variant="body1" sx={RightsPageStyle.bodyText}>
          By using this website, you agree to the following terms and policies.
          Please read them carefully before using the site.
        </Typography>
      </Stack>

      <Stack sx={RightsPageStyle.contentContainer}>
        {rightsText.map(({ title, text }) => (
          <Stack sx={RightsPageStyle.articleContainer}>
            <Typography variant="h4" sx={RightsPageStyle.titleText}>
              {title}
            </Typography>

            <Typography variant="body1" sx={RightsPageStyle.bodyText}>
              {text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
