import { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getProductsQueryOptions } from '../../queryOptions/getProductsQueryOptions';

export const useCatalogProducts = () => {
  const location = useLocation();
  const currentCategory = location.pathname.slice(1);

  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'newest';
  const currentPage = +(searchParams.get('page') || 1);
  const perPage = +(searchParams.get('perPage') || 0);

  const { data: allProducts = [], isPending } = useQuery(
    getProductsQueryOptions(),
  );

  const filtered = useMemo(
    () => allProducts.filter(p => p.category === currentCategory),
    [allProducts, currentCategory],
  );

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year;
      if (sortBy === 'alphabetically') return a.name.localeCompare(b.name);
      if (sortBy === 'cheapest') return a.price - b.price;
      return 0;
    });
  }, [filtered, sortBy]);

  const itemsPerPage = perPage > 0 ? perPage : sorted.length || 1;
  const from = (currentPage - 1) * itemsPerPage;
  const visibleProducts = sorted.slice(from, from + itemsPerPage);
  const totalPages = Math.max(1, Math.ceil(sorted.length / itemsPerPage));

  return {
    visibleProducts,
    totalProductsNumber: filtered.length,
    totalPages,
    isPending,
  };
};
