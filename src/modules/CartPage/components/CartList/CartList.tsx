import React from 'react';
import Stack from '@mui/material/Stack';

import { CartItem } from '../../../../utils/Types';
import { CartCard } from '../CartCard/CartCard';

interface Props {
  cart: CartItem[];
}

export const CartList: React.FC<Props> = ({ cart }) => {
  return (
    <Stack direction="column" spacing="16px">
      {cart.map(item => (
        <CartCard item={item} key={item.id} />
      ))}
    </Stack>
  );
};
