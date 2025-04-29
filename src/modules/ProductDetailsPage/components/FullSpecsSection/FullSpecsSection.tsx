import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import { ProductDetailsInfo } from '../../../../utils/Types';
import { SpecsInfo } from '../../../shared/components/SpecsInfo/SpecsInfo';
import { getFullSpecs } from '../../../../utils/functions/getProductSpecs';
import { fullSpecsSectionStyle } from './FullSpecsSectionStyles';

type Props = {
  product: ProductDetailsInfo;
};

export const FullSpecsSection: React.FC<Props> = ({ product }) => {
  const specs = getFullSpecs(product);

  return (
    <Box>
      <Typography variant="h3">Tech specs</Typography>

      <Divider sx={fullSpecsSectionStyle.divider} />

      <Box sx={fullSpecsSectionStyle.specsContainer}>
        <SpecsInfo specs={specs} textVariant="body1" />
      </Box>
    </Box>
  );
};
