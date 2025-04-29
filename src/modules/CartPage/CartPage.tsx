import { Grid, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';

import { BackButton } from '../shared/components/BackButton/BackButton';
import { CartList } from './components/CartList/CartList';
import { CartSummary } from './components/CartSummary/CartSummary';
import { CartItem } from '../../utils/Types';
import { CartGridStyle } from './CartStyles';

export const CartPage: React.FC = () => {
  const theme = useTheme();
  const [cart] = useState<CartItem[]>([
    {
      id: 'apple-iphone-11-128gb-black',
      name: 'Apple iPhone 11 128GB Black',
      image: 'img/phones/apple-iphone-11/black/00.webp',
      price: 1050,
      quantity: 1,
    },
    {
      id: 'apple-ipad-pro-11-2021-128gb-spacegray',
      name: 'Apple iPad Pro 11 (2021) 128GB Space Gray',
      image: 'img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp',
      price: 749,
      quantity: 1,
    },
    {
      id: 'apple-watch-series-3-38mm-space-gray',
      name: 'Apple Watch Series 3 38mm Space Gray',
      image: 'img/accessories/apple-watch-series-3/space-gray/00.webp',
      price: 169,
      quantity: 2,
    },
  ]);

  return (
    <Grid container rowSpacing={4} columnSpacing={2} sx={CartGridStyle(theme)}>
      <Grid size={{ mobile: 4, tablet: 12, desktop: 24 }}>
        <BackButton />
      </Grid>
      <Grid size={{ mobile: 4, tablet: 12, desktop: 24 }}>
        <Typography variant="h1">Cart</Typography>
      </Grid>
      <Grid size={{ mobile: 4, tablet: 12, desktop: 16 }}>
        <CartList cart={cart} />
      </Grid>
      <Grid size={{ mobile: 4, tablet: 12, desktop: 8 }}>
        <CartSummary
          cost={cart.reduce(
            (acc: number, item) => acc + item.price * item.quantity,
            0,
          )}
          quantity={cart.reduce((acc: number, item) => acc + item.quantity, 0)}
        />
      </Grid>
    </Grid>
  );
};
