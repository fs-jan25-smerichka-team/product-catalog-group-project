import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { useSuggestedProducts } from '../../../../utils/hooks/useSuggestedProducts';
import { ProductsSlider } from '../../../shared/components/ProductsSlider/ProductsSlider';
import { getProducts } from '../../../../utils/api';
import { Loader } from '../../../shared/components/Loader/Loader';

export const SuggestedProducts: React.FC = () => {
  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const suggestedProducts = useSuggestedProducts(data || []);

  return isPending ? (
    <Loader />
  ) : (
    <ProductsSlider
      title={'You may also like'}
      visibleProducts={suggestedProducts}
    />
  );
};
