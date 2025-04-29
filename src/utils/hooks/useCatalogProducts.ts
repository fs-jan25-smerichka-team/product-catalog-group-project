import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProductCardInfo } from '../Types';

//Use products with category from Redux there
export const useCatalogProducts = (products: ProductCardInfo[]) => {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sort') || 'Newest';
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = Number(searchParams.get('perPage')) || products.length;

  const sorted = useMemo(() => {
    return [...products].sort((productA, productB) => {
      switch (sortBy) {
        case 'Newest':
          return productB.year - productA.year;
        case 'Alphabetically':
          return productA.name.localeCompare(productB.name);
        case 'Cheapest':
          return productA.price - productB.price;
        default:
          return 0;
      }
    });
  }, [products, sortBy]);

  const visibleProducts = useMemo(() => {
    const from = (currentPage - 1) * itemsPerPage;

    return sorted.slice(from, from + itemsPerPage);
  }, [sorted, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sorted.length / itemsPerPage);

  return { visibleProducts, totalPages };
};
