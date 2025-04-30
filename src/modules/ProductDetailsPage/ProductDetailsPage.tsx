import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

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
import { ProductDetailsInfo } from '../../utils/Types';
import { productDetailsStyle } from './ProductDetailsStyles';
import { CATALOG_API_CALLS } from '../../constants/constants';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/')[1];

  const queryFn = CATALOG_API_CALLS[category];

  const { data: products, isPending } = useQuery<ProductDetailsInfo[], boolean>(
    {
      queryKey: [category],
      queryFn,
      enabled: !!queryFn,
    },
  );

  const product: ProductDetailsInfo | undefined = products?.find(
    prod => prod.id === productId,
  );

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
        columnSpacing={{ mobile: 0, desktop: 8 }}
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
