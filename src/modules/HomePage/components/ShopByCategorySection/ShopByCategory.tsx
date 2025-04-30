import React from 'react';

import phonesBanner from '/img/category-phones.png';
import tabletsBanner from '/img/category-tablets.png';
import accessoriesBanner from '/img/category-accessories.png';

import { useQuery } from '@tanstack/react-query';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { getProducts } from '../../../../utils/api';
import { ProductCardInfo } from '../../../../utils/Types';
import {
  categoryContainerStyle,
  categoryItemStyle,
  componentContainerStyle,
} from './ShopByCategoryStyles';

type categoryButtonItem = {
  category: string;
  label: string;
  image: string;
};

const categoryButtons: categoryButtonItem[] = [
  {
    category: 'phones',
    label: 'Mobile phones',
    image: phonesBanner,
  },
  {
    category: 'tablets',
    label: 'Tablets',
    image: tabletsBanner,
  },
  {
    category: 'accessories',
    label: 'Accessories',
    image: accessoriesBanner,
  },
];

export const ShopByCategorySection: React.FC = () => {
  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const categorisedProducts = (data || []).reduce<
    Record<string, ProductCardInfo[]>
  >((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <Stack sx={componentContainerStyle}>
      <Typography variant="h2" align={'left'}>
        Shop by category
      </Typography>

      <Stack
        direction={{ mobile: 'column', tablet: 'row' }}
        gap={{ mobile: 4, tablet: 2 }}
        sx={categoryContainerStyle}
      >
        {categoryButtons.map(({ category, label, image }) => (
          <Box key={label} sx={categoryItemStyle.itemContainer}>
            <Link to={category} style={{ textDecoration: 'none' }}>
              <Stack direction={'column'} gap={3}>
                <Box sx={categoryItemStyle.imageContainer}>
                  <Box
                    component="img"
                    src={image}
                    alt={`${label} category image`}
                    sx={categoryItemStyle.image}
                  />
                </Box>

                <Stack direction={'column'} gap={0.5}>
                  <Typography variant="h4" color="primary.main">
                    {label}
                  </Typography>

                  <Typography variant="body1" color="secondary.dark">
                    {isPending
                      ? 'loading'
                      : `${categorisedProducts[category]?.length} models`}
                  </Typography>
                </Stack>
              </Stack>
            </Link>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
