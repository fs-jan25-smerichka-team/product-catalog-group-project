import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

import { BackButton } from '../shared/components/BackButton/BackButton';
import { ProductDetailsInfo } from '../../utils/Types';
import { titleStyle } from '../CatalogPage/CatalogStyles';
import {
  backButtonBoxStyle,
  productDetailsPageContainerStyle,
  titleBoxStyle,
} from './ProductDetailsStyles';
import {
  AboutSection,
  ControlsPanel,
  FullSpecsSection,
  Gallery,
  SuggestedProducts,
} from './components';
import { BreadcrumbsSection } from '../shared/components/Breadcrumbs/Breadcrumbs';

const productFromServer: ProductDetailsInfo = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.webp',
    'img/phones/apple-iphone-11/black/01.webp',
    'img/phones/apple-iphone-11/black/02.webp',
    'img/phones/apple-iphone-11/black/03.webp',
    'img/phones/apple-iphone-11/black/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const ProductDetailsPage: React.FC = () => {
  const product: ProductDetailsInfo = productFromServer;

  return (
    <Stack sx={productDetailsPageContainerStyle}>
      <BreadcrumbsSection />

      <Box sx={backButtonBoxStyle}>
        <BackButton />
      </Box>

      <Box sx={titleBoxStyle}>
        <Typography variant="h1" sx={titleStyle}>
          {product.name}
        </Typography>
      </Box>

      <Grid
        container
        rowSpacing={{ mobile: '56px', tablet: '64px', desktop: '80px' }}
        columnSpacing={{ mobile: 0, desktop: 1 }}
        columns={{ mobile: 4, tablet: 12, desktop: 24 }}
      >
        <Grid size={{ mobile: 4, tablet: 6, desktop: 12 }}>
          <Gallery product={product} />
        </Grid>

        <Grid size={{ mobile: 4, tablet: 5, desktop: 7 }}>
          <ControlsPanel product={product} />
        </Grid>

        <Grid size={{ mobile: 4, tablet: 12 }}>
          <AboutSection description={product.description} />
        </Grid>

        <Grid size={{ mobile: 4, tablet: 12, desktop: 11 }}>
          <FullSpecsSection product={product} />
        </Grid>

        <Grid size={{ mobile: 4, tablet: 12, desktop: 24 }}>
          <SuggestedProducts />
        </Grid>
      </Grid>
    </Stack>
  );
};
