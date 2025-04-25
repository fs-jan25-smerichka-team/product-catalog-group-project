import React from 'react';
import { Stack, Typography } from '@mui/material';

import { pageContainerStyle, pageTitleStyle } from './NotFoundStyles';
import { BackButton } from '../shared/components/BackButton/BackButton';

export const NotFoundPage: React.FC = () => {
  return (
    <Stack spacing={1} sx={pageContainerStyle}>
      <BackButton />
      <Typography variant="h1" sx={pageTitleStyle}>
        Sorry, page not found
      </Typography>
    </Stack>
  );
};
