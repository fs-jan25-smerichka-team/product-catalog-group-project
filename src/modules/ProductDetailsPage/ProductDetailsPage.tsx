import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Stack, Typography } from '@mui/material';

import { BackButton } from '../shared/components/BackButton/BackButton';
import {
  AboutSection,
  ControlsSection,
  FullSpecsSection,
  Gallery,
  SuggestedProducts,
} from './components';
import { Loader } from '../shared/components/Loader/Loader';
import { BreadcrumbsSection } from '../shared/components/Breadcrumbs/Breadcrumbs';
import { useProductDetails } from '../../utils/hooks/useProductDetails';
import { productDetailsStyle } from './ProductDetailsStyles';

export const ProductDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { product, isPending } = useProductDetails();

  if (isPending) {
    return <Loader />;
  }

  if (!product) {
    navigate('/not-found', { replace: true });
    return;
  }

  return (
    <Stack>
      <BreadcrumbsSection />

      <Box sx={productDetailsStyle.backButtonContainer}>
        <BackButton />
      </Box>

      <Box sx={productDetailsStyle.titleContainer}>
        <Typography variant="h1">{product.name}</Typography>
      </Box>

      <Grid
        container
        columns={{ mobile: 4, tablet: 12, desktop: 24 }}
        rowSpacing={{ mobile: 7, tablet: 8, desktop: 10 }}
        columnSpacing={{ mobile: 0, tablet: 2, desktop: 8 }}
        sx={productDetailsStyle.gridContainer}
      >
        <Grid size={{ mobile: 4, tablet: 7, desktop: 12 }} mb={{ mobile: 3 }}>
          <Gallery product={product} />
        </Grid>

        <Grid
          size={{ mobile: 4, tablet: 5, desktop: 12 }}
          sx={productDetailsStyle.constrolsGridContainer}
        >
          <ControlsSection product={product} />

          <Box sx={productDetailsStyle.productIdContainer}>
            <Typography variant="body2" color="secondary.main">
              ID: {product.id}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ mobile: 4, tablet: 12, desktop: 12 }}>
          <AboutSection description={product.description} />
        </Grid>

        <Grid size={{ mobile: 4, tablet: 12, desktop: 12 }}>
          <FullSpecsSection product={product} />
        </Grid>

        <Grid size={{ mobile: 4, tablet: 12, desktop: 24 }}>
          <SuggestedProducts />
        </Grid>
      </Grid>
    </Stack>
  );
};
