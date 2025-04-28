import { Box, Typography } from '@mui/material';
import React from 'react';

import { specsInfoStyle } from './SpecsInfoStyles';

type Props = {
  specs: Record<string, string>;
  textVariant: 'body1' | 'body2';
};

export const SpecsInfo: React.FC<Props> = ({ specs, textVariant }) => {
  return (
    <Box sx={specsInfoStyle.specsBox}>
      {Object.entries(specs).map(([label, value]) => (
        <Box key={label} sx={specsInfoStyle.rowBox}>
          <Typography variant={textVariant} sx={specsInfoStyle.rowLabel}>
            {label}
          </Typography>
          <Typography variant={textVariant} sx={specsInfoStyle.rowValue}>
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
