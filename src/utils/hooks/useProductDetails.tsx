import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { CATALOG_API_CALLS } from '../../constants/constants';
import { ProductDetailsInfo } from '../Types';

export const useProductDetails = () => {
  const { productId, category } = useParams();

  const queryFn = CATALOG_API_CALLS[category];

  const {
    data: products = [],
    isPending,
    isError,
    error,
  } = useQuery<ProductDetailsInfo[], Error>({
    queryKey: [category],
    queryFn,
    enabled: !!queryFn,
  });

  const selectedProduct = products.find(prod => prod.id === productId);

  const productsBySelectedModel = selectedProduct
    ? products.filter(
        product => product.namespaceId === selectedProduct.namespaceId,
      )
    : [];

  return {
    product: selectedProduct,
    productsBySelectedModel,
    isPending,
    isError,
    error,
  };
};
