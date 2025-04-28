import { useMemo } from 'react';

import { ProductCardInfo } from '../Types';
import { DEVICE_SLIDER_ITEMS_MAX } from '../../constants/constants';

//Use all products from Redux there
export const useSuggestedProducts = (
  products: ProductCardInfo[],
): ProductCardInfo[] => {
  return useMemo(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, DEVICE_SLIDER_ITEMS_MAX);
  }, [products]);
};
