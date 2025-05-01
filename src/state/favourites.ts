import { atomWithStorage } from 'jotai/utils';

import { STORAGE_FAVOURITES_KEY } from '../constants/storage';

export const favouritesStorageItemsAtom = atomWithStorage<string[]>(
  STORAGE_FAVOURITES_KEY,
  [],
);
