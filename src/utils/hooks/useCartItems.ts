import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';

import { getProductsQueryOptions } from '../../queryOptions/getProductsQueryOptions';
import { buildCartItems } from '../functions/cartUtils';
import { cartStorageItemsAtom } from '../../state/cart';
import { CartItem, CartStorageItem } from '../Types';

export const useCartItems = () => {
  const [cartStorageItems, setCartStorageItems] =
    useAtom<CartStorageItem[]>(cartStorageItemsAtom);
  const { data: allProducts, isPending } = useQuery(getProductsQueryOptions());

  const cartItems: CartItem[] = buildCartItems(
    cartStorageItems as CartStorageItem[],
    allProducts,
  );

  const clearCart = () => {
    setCartStorageItems([]);
  };

  const removeCartItem = (itemId: string) => {
    const updated = cartStorageItems.filter(item => item.id !== itemId);
    setCartStorageItems(updated);
  };

  const increaseQuantity = (itemId: string) => {
    setCartStorageItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (itemId: string) => {
    setCartStorageItems(prev =>
      prev.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const totalQuantity = cartStorageItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return {
    cartItems,
    clearCart,
    removeCartItem,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    isPending,
  };
};
