import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import { CartItem } from '../../../../utils/Types';
import { CartCard } from '../CartCard/CartCard';

interface Props {
  cartItems: CartItem[];
}

export const CartList: React.FC<Props> = ({ cartItems }) => {
  return cartItems.length ? (
    <Stack direction="column" spacing="16px">
      {cartItems.map(item => (
        <CartCard item={item} key={item.id} />
      ))}
    </Stack>
  ) : (
    <Typography variant="h3">Your cart is empty</Typography>
  );
};
