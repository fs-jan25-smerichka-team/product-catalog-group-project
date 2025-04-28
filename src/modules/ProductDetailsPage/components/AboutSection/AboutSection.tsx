import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import { ProductDetailsInfo } from '../../../../utils/Types';
import { AboutSectionStyle } from './AboutSectionStyles';

type Props = {
  description: ProductDetailsInfo['description'];
};

export const AboutSection: React.FC<Props> = ({ description }) => (
  <Box>
    <Typography variant="h3">About</Typography>

    <Divider sx={AboutSectionStyle.divider} />

    {description.map(({ title, text }, descIndex) => (
      <Box key={descIndex} sx={AboutSectionStyle.articleContainer}>
        <Typography variant="h4" sx={AboutSectionStyle.articleTitle}>
          {title}
        </Typography>

        {text.map((sentence, sentenceIndex) => (
          <Typography
            key={sentenceIndex}
            variant="body1"
            sx={AboutSectionStyle.articleBody}
          >
            {sentence}
          </Typography>
        ))}
      </Box>
    ))}
  </Box>
);
