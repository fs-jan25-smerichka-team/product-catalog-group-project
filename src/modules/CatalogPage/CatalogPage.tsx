import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Dropdown } from '../shared/components/Dropdown/Dropdown';
import { ProductGrid, Pagination } from './components';
import { BreadcrumbsSection } from '../shared/components/Breadcrumbs/Breadcrumbs';
import { Loader } from '../shared/components/Loader/Loader';
import { getProducts } from '../../utils/api';
import {
  CATALOG_TITLES,
  PER_PAGE_OPTIONS,
  SORTY_BY_OPTIONS,
} from '../../constants/constants';
import {
  pageContainerStyle,
  titleContainerStyle,
  sortingContainerStyle,
  dropdownContainerStyle,
  productGridContainerStyle,
  paginationBoxStyle,
} from './CatalogStyles';

export const CatalogPage: React.FC = () => {
  const location = useLocation();
  const activeTitle = CATALOG_TITLES[location.pathname];

  const currentCategory = location.pathname.slice(1);

  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const products = (data || []).filter(
    product => product.category === currentCategory,
  );

  return (
    <>
      <Stack sx={pageContainerStyle}>
        <BreadcrumbsSection />

        {/* Title + number of models */}
        <Stack spacing={1} sx={titleContainerStyle}>
          <Typography variant="h1">{activeTitle}</Typography>

          <Typography variant="body1">{products.length} models</Typography>
        </Stack>

        {/* Sorting */}
        <Stack direction={'row'} spacing={2} sx={sortingContainerStyle}>
          {/* Sort by */}
          <Box sx={dropdownContainerStyle}>
            <Typography variant="body2" color="textSecondary">
              Sort by
            </Typography>
            <Dropdown
              items={SORTY_BY_OPTIONS}
              activeItem={'newest'}
              onSelect={() => {}}
            />
          </Box>

          {/* Items on page */}
          <Box sx={dropdownContainerStyle}>
            <Typography variant="body2" color="textSecondary">
              Items on page
            </Typography>
            <Dropdown
              items={PER_PAGE_OPTIONS}
              activeItem={'16'}
              onSelect={() => {}}
            />
          </Box>
        </Stack>

        <Box sx={productGridContainerStyle}>
          {isPending ? <Loader /> : <ProductGrid products={products} />}
        </Box>

        <Box sx={paginationBoxStyle}>
          <Pagination />
        </Box>
      </Stack>
    </>
  );
};
