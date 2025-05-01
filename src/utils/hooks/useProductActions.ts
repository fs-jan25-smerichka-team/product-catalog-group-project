import { useAtom } from 'jotai';

import { cartStorageItemsAtom } from '../../state/cart';
import { favouritesStorageItemsAtom } from '../../state/favourites';
import { CartStorageItem } from '../../utils/Types';

export const useProductActions = (itemId: string) => {
  const [cartStorageItems, setCartStorageItems] = useAtom(cartStorageItemsAtom);
  const [favouritesStorageItems, setFavouritesStorageItems] = useAtom(
    favouritesStorageItemsAtom,
  );

  const isInCart = cartStorageItems.some(item => item.id === itemId);
  const isInFavourites = favouritesStorageItems.includes(itemId);

  const addToCart = () => {
    setCartStorageItems((prev: CartStorageItem[]) => {
      if (prev.some(item => item.id === itemId)) return prev;
      return [...prev, { id: itemId, quantity: 1 }];
    });
  };

  const toggleFavourites = () => {
    setFavouritesStorageItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId],
    );
  };

  return {
    isInCart,
    isInFavourites,
    addToCart,
    toggleFavourites,
  };
};
