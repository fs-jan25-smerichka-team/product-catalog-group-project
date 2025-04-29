import { useMemo } from 'react';

import { ProductCardInfo } from '../Types';
import { DEVICE_SLIDER_ITEMS_MAX } from '../../constants/constants';

//Use all products from Redux there
export const useHotPricesProducts = (products: ProductCardInfo[]) => {
  return useMemo(() => {
    return [...products]
      .sort(
        (productA, productB) =>
          productB.fullPrice -
          productB.price -
          (productA.fullPrice - productA.price),
      )
      .slice(0, DEVICE_SLIDER_ITEMS_MAX);
  }, [products]);
};
