import React, { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ProductGrid, Pagination } from './components';
import { BreadcrumbsSection } from '../shared/components/Breadcrumbs/Breadcrumbs';
import { Loader } from '../shared/components/Loader/Loader';
import { CatalogDropdown } from './components/CatalogDropdown';
import { useCatalogProducts } from '../../utils/hooks/useCatalogProducts';
import {
  CATALOG_TITLES,
  PER_PAGE_OPTIONS,
  SORTY_BY_OPTIONS,
} from '../../constants/constants';
import {
  titleContainerStyle,
  sortingContainerStyle,
  productGridContainerStyle,
  paginationBoxStyle,
} from './CatalogStyles';
import { useCategoryFromUrl } from '../../utils/hooks/useCategoryFromUrl';

export const CatalogPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentCategory, isValidCategory } = useCategoryFromUrl();

  useEffect(() => {
    if (!isValidCategory) {
      navigate('/not-found', { replace: true });
    }
  }, [currentCategory, isValidCategory, navigate]);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeSort = searchParams.get('sort') || 'Newest';
  const activePerPage = searchParams.get('perPage') || '16';

  const handleParamChange = (key: string) => (value: string) => {
    searchParams.set(key, value);
    searchParams.delete('page');
    setSearchParams(searchParams);
  };

  const { visibleProducts, totalProductsNumber, totalPages, isPending } =
    useCatalogProducts();

  return (
    <Stack>
      <BreadcrumbsSection />

      {/* Title */}
      <Stack spacing={1} sx={titleContainerStyle}>
        <Typography variant="h1">{CATALOG_TITLES[currentCategory]}</Typography>
        <Typography variant="body1" color="secondary.dark">
          {isPending ? 'Loading...' : `${totalProductsNumber} models`}
        </Typography>
      </Stack>

      {isPending ? (
        <Loader />
      ) : (
        <>
          {/* Dropdowns */}
          <Stack direction="row" spacing={2} sx={sortingContainerStyle}>
            <CatalogDropdown
              label={'Sort by'}
              items={SORTY_BY_OPTIONS}
              activeItem={activeSort}
              onSelect={handleParamChange('sort')}
            />

            <CatalogDropdown
              label={'Items on page'}
              items={PER_PAGE_OPTIONS}
              activeItem={activePerPage}
              onSelect={handleParamChange('perPage')}
            />
          </Stack>

          {/* Products */}
          <Box sx={productGridContainerStyle}>
            <ProductGrid products={visibleProducts} />
          </Box>

          {totalPages > 1 && (
            <Box sx={paginationBoxStyle}>
              <Pagination totalPages={totalPages} />
            </Box>
          )}
        </>
      )}
    </Stack>
  );
};
