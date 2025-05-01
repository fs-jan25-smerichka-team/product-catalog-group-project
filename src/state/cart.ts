import { atomWithStorage } from 'jotai/utils';

import { CartStorageItem } from '../utils/Types';
import { STORAGE_CART_KEY } from '../constants/storage';

export const cartStorageItemsAtom = atomWithStorage<CartStorageItem[]>(
  STORAGE_CART_KEY,
  [],
);
