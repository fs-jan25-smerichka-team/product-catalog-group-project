import { queryOptions } from '@tanstack/react-query';

import { getProducts } from '../utils/api';

export const getProductsQueryOptions = () => {
  return queryOptions({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};
