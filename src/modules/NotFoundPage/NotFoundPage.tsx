import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import {
  deviceSliderContainerStyle,
  pageContainerStyle,
  pageTitleStyle,
} from './NotFoundStyles';
import { BackButton } from '../shared/components/BackButton/BackButton';
import { SuggestedProducts } from '../ProductDetailsPage/components';

export const NotFoundPage: React.FC = () => {
  return (
    <Stack sx={pageContainerStyle}>
      <BackButton />

      <Typography variant="h1" sx={pageTitleStyle}>
        Sorry, page not found
      </Typography>

      <Box sx={deviceSliderContainerStyle}>
        <SuggestedProducts />
      </Box>
    </Stack>
  );
};
