import React from 'react';

import { CartItem } from '../../../../utils/Types';
import { CartCard } from '../CartCard/CartCard';

interface Props {
  cart: CartItem[];
}

export const CartList: React.FC<Props> = ({ cart }) => {
  return (
    <>
      {cart.map(item => (
        <CartCard item={item} key={item.id} />
      ))}
    </>
  );
};
