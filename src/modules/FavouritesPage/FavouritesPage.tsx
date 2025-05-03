import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { BreadcrumbsSection } from '../shared/components/Breadcrumbs/Breadcrumbs';
import { ProductCard } from '../shared/ProductCard/ProductCard';
import { useFavouritesItems } from '../../utils/hooks/useFavouritesItems';
import { containerStyle, titleStyle } from './FavouritesStyles';
import { Loader } from '../shared/components/Loader/Loader';

export const FavouritesPage: React.FC = () => {
  const { favouritesItems: products, isPending } = useFavouritesItems();

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

          <Typography variant="body1">
            {isPending ? 'Loading...' : `${products.length} items`}
          </Typography>
        </Box>

        {isPending ? (
          <Loader />
        ) : (
          <Box>
            {/* grid of card */}
            {products.length ? (
              <Grid container spacing={2}>
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
            ) : (
              <Typography variant="h3">Your favourites is empty</Typography>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};
