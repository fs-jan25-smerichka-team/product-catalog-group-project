import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';

import { favouritesStorageItemsAtom } from '../../state/favourites';
import { getProductsQueryOptions } from '../../queryOptions/getProductsQueryOptions';
import { ProductCardInfo } from '../Types';

export const useFavouritesItems = () => {
  const [favouritesStorageItems, setFavouritesStorageItems] = useAtom<string[]>(
    favouritesStorageItemsAtom,
  );
  const { data: allProducts = [] } = useQuery(getProductsQueryOptions());

  const favouritesItems: ProductCardInfo[] = favouritesStorageItems
    .map(id => allProducts.find(p => p.itemId === id))
    .filter((item): item is ProductCardInfo => Boolean(item));

  const removeItemFromFavourites = (itemId: string) => {
    const updated = favouritesStorageItems.filter(id => id !== itemId);
    setFavouritesStorageItems(updated);
  };

  return {
    favouritesItems,
    removeItemFromFavourites,
  };
};
