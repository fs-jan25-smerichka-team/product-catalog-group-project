import React from 'react';
import { Grid } from '@mui/material';

import { ProductCardInfo } from '../../../../utils/Types';
import { ProductCard } from '../../../shared/ProductCard/ProductCard';

type Props = {
  products: ProductCardInfo[];
};

export const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={5}>
      {products.map(product => (
        <Grid
          size={{
            mobile: 4,
            mobileCustom: 2,
            tablet: 6,
            custom: 4,
            desktop: 6,
          }}
          key={product.id}
          display={'flex'}
          justifyContent={'center'}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
