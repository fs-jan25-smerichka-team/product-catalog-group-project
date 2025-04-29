import { useMemo } from 'react';

import { ProductCardInfo } from '../Types';
import { DEVICE_SLIDER_ITEMS_MAX } from '../../constants/constants';

//Use all products from Redux there
export const useBrandNewProducts = (products: ProductCardInfo[]) => {
  return useMemo(() => {
    return [...products]
      .filter(product => product.fullPrice === product.price)
      .sort((productA, productB) => productB.fullPrice - productA.fullPrice)
      .slice(0, DEVICE_SLIDER_ITEMS_MAX);
  }, [products]);
};
