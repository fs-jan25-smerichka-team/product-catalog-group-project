import { Box, Grid, IconButton, SvgIcon, Typography } from '@mui/material';
import React from 'react';

import homeIcon from '../../assets/icons/home.svg';
import { Dropdown } from '../shared/components/Dropdown/Dropdown';
import { ProductCard } from '../shared/ProductCard/ProductCard';
import {
  breadcrumbsStyle,
  containerStyle,
  paginationBoxStyle,
  sortBoxStyle,
  sortingContainerStyle,
  titleStyle,
} from './CatalogStyles';

const products = [
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
  return (
    <>
      <Box sx={containerStyle}>
        {/* Breadcrumbs */}
        <Box sx={breadcrumbsStyle}>
          <IconButton onClick={() => {}}>
            <img src={homeIcon} alt="favoriteIcon" width={16} height={16} />
          </IconButton>

          <SvgIcon sx={{ height: '16px' }}>
            <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
          </SvgIcon>

          <Typography variant="body2">Phones</Typography>
        </Box>

        {/* Title + number of models */}
        <Box sx={{ backgroundColor: '#8FBC8F' }}>
          <Typography variant="h1" sx={titleStyle}>
            Mobile phones
          </Typography>
          <Typography variant="body1">95 models</Typography>
        </Box>

        <Box sx={{ backgroundColor: '#E0FFFF' }}>
          {/* Sorting */}
          <Box sx={sortingContainerStyle}>
            {/* Sort by */}
            <Box sx={sortBoxStyle}>
              <Typography variant="body2" color="textSecondary">
                Sort by
              </Typography>
              <Dropdown
                items={[]}
                activeItem={''}
                helperText={''}
                onSelect={() => {}}
              />
            </Box>

            {/* Items on page */}
            <Box sx={sortBoxStyle}>
              <Typography variant="body2" color="textSecondary">
                Items on page
              </Typography>
              <Dropdown
                items={[]}
                activeItem={''}
                helperText={''}
                onSelect={() => {}}
              />
            </Box>
          </Box>

          {/* grid of card */}
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid
                size={{ mobile: 4, tablet: 6, desktop: 6 }}
                key={product.id}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          {/* Pages */}
          <Box sx={paginationBoxStyle}>
            <Typography>Pagination</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
