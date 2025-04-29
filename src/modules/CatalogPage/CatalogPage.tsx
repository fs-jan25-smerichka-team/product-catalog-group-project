import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Dropdown } from '../shared/components/Dropdown/Dropdown';
import {
  pageContainerStyle,
  titleContainerStyle,
  sortingContainerStyle,
  dropdownContainerStyle,
  productGridContainerStyle,
  paginationBoxStyle,
} from './CatalogStyles';
import { BreadcrumbsSection } from '../shared/components/Breadcrumbs/Breadcrumbs';
import { catalogTitles } from '../../constants/constants';
import { ProductGrid, Pagination } from './components';

const productsFromserver = [
  {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  },
  {
    id: 2,
    category: 'phones',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.webp',
  },
  {
    id: 3,
    category: 'phones',
    itemId: 'apple-iphone-8-64gb-gold',
    name: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'gold',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/gold/00.webp',
  },
  {
    id: 4,
    category: 'phones',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.webp',
  },
  {
    id: 5,
    category: 'phones',
    itemId: 'apple-iphone-11-128gb-yellow',
    name: 'Apple iPhone 11 128GB Yellow',
    fullPrice: 1100,
    price: 1050,
    screen: "6.1' IPS",
    capacity: '128GB',
    color: 'yellow',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/yellow/00.webp',
  },
  {
    id: 6,
    category: 'phones',
    itemId: 'apple-iphone-11-256gb-green',
    name: 'Apple iPhone 11 256GB Green',
    fullPrice: 1172,
    price: 1115,
    screen: "6.1' IPS",
    capacity: '256GB',
    color: 'green',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/green/00.webp',
  },
  {
    id: 7,
    category: 'phones',
    itemId: 'apple-iphone-11-pro-64gb-gold',
    name: 'Apple iPhone 11 Pro 64GB Gold',
    fullPrice: 1312,
    price: 1270,
    screen: "5.8' OLED",
    capacity: '64GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/gold/00.webp',
  },
];

export const CatalogPage: React.FC = () => {
  const location = useLocation();
  const activeTitle = catalogTitles[location.pathname];
  const products = productsFromserver;

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
              items={['Newest', 'Alphabetically ', 'Cheapest']}
              activeItem={'Newest'}
              helperText={''}
              onSelect={() => {}}
            />
          </Box>

          {/* Items on page */}
          <Box sx={dropdownContainerStyle}>
            <Typography variant="body2" color="textSecondary">
              Items on page
            </Typography>
            <Dropdown
              items={['4', '8', '16', 'All']}
              activeItem={'16'}
              helperText={''}
              onSelect={() => {}}
            />
          </Box>
        </Stack>

        <Box sx={productGridContainerStyle}>
          <ProductGrid products={products} />
        </Box>

        <Box sx={paginationBoxStyle}>
          <Pagination />
        </Box>
      </Stack>
    </>
  );
};
