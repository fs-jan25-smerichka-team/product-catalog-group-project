import React from 'react';
import { Box } from '@mui/material';

import { ProductDetailsInfo } from '../../../../utils/Types';

type Props = {
  product: ProductDetailsInfo;
};

export const Gallery: React.FC<Props> = ({ product }) => {
  return (
    <>
      {/* Тут буде Swiper */}
      <Box>
        <img
          src={product.images[0]}
          alt="product image"
          width={288}
          height={288}
        />
      </Box>
    </>
  );
};
