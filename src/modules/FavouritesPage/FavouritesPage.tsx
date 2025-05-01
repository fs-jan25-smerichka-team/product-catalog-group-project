import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { BreadcrumbsSection } from '../shared/components/Breadcrumbs/Breadcrumbs';
import { ProductCard } from '../shared/ProductCard/ProductCard';
import { useFavouritesItems } from '../../utils/hooks/useFavouritesItems';
import { containerStyle, titleStyle } from './FavouritesStyles';

export const FavouritesPage: React.FC = () => {
  const { favouritesItems: products } = useFavouritesItems();

  return (
    <>
      <Box sx={containerStyle}>
        {/* Breadcrumbs */}
        <BreadcrumbsSection />

        {/* Title + number of models */}
        <Box>
          <Typography variant="h1" sx={titleStyle}>
            Favourites
          </Typography>

          <Typography variant="body1">{products.length} items</Typography>
        </Box>

        <Box>
          {/* grid of card */}
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid
                size={{ mobile: 4, tablet: 6, custom: 4, desktop: 6 }}
                key={product.id}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
