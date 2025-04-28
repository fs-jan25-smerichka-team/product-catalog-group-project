import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { ProductCard } from '../../../shared/ProductCard/ProductCard';
import { container } from './SuggestedDevicesStyles';
import { useSuggestedProducts } from '../../../../utils/hooks/useSuggestedProducts';
import { ProductCardInfo } from '../../../../utils/Types';

const products: ProductCardInfo[] = [
  {
    id: 132,
    category: 'accessories',
    itemId: 'apple-watch-series-6-44mm-gold',
    name: 'Apple Watch Series 6 44mm Gold',
    fullPrice: 429,
    price: 359,
    screen: "1.57' OLED",
    capacity: '44mm',
    color: 'gold',
    ram: '1GB',
    year: 2020,
    image: 'img/accessories/apple-watch-series-6/gold/00.webp',
  },
  {
    id: 133,
    category: 'accessories',
    itemId: 'apple-watch-series-6-40mm-blue',
    name: 'Apple Watch Series 6 40mm Blue',
    fullPrice: 399,
    price: 329,
    screen: "1.57' OLED",
    capacity: '40mm',
    color: 'blue',
    ram: '1GB',
    year: 2020,
    image: 'img/accessories/apple-watch-series-6/blue/00.webp',
  },
  {
    id: 134,
    category: 'accessories',
    itemId: 'apple-watch-series-6-44mm-blue',
    name: 'Apple Watch Series 6 44mm Blue',
    fullPrice: 429,
    price: 359,
    screen: "1.57' OLED",
    capacity: '44mm',
    color: 'blue',
    ram: '1GB',
    year: 2020,
    image: 'img/accessories/apple-watch-series-6/blue/00.webp',
  },
  {
    id: 135,
    category: 'accessories',
    itemId: 'apple-watch-series-6-40mm-red',
    name: 'Apple Watch Series 6 40mm Red',
    fullPrice: 399,
    price: 329,
    screen: "1.57' OLED",
    capacity: '40mm',
    color: 'red',
    ram: '1GB',
    year: 2020,
    image: 'img/accessories/apple-watch-series-6/red/00.webp',
  },
];

export const SuggestedProducts: React.FC = () => {
  const suggestedProducts = useSuggestedProducts(products); //take products from Redux

  return (
    <>
      <Typography variant="h1">You may also like</Typography>
      <Grid container spacing={2} sx={container}>
        {suggestedProducts.map(product => (
          <Grid size={{ mobile: 4, tablet: 6, desktop: 6 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
