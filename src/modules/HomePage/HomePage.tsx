import { Box, Grid, Typography } from '@mui/material';

import {
  brandNewModelsBoxStyle,
  categoryBoxStyle,
  categoryItemBoxStyle,
  categoryTitleStyle,
  heroBoxStyle,
  heroTitleStyle,
  hotPricesBoxStyle,
} from './HomePageStyle';
import { ProductsSlider } from '../shared/components/ProductsSlider/ProductsSlider';

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

export const HomePage: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        spacing={{
          mobile: 7,
          tablet: 8.125,
          desktop: 10,
        }}
      >
        {/* Hero Section */}
        <Grid>
          <Box sx={heroBoxStyle}>
            <Typography variant="h1" sx={heroTitleStyle}>
              Welcome to Nice Gadgets store!
            </Typography>
            <Typography variant="h2">Slider</Typography>
          </Box>
        </Grid>

        {/* Brand new models */}
        <Grid sx={{ width: '100%' }}>
          <Box sx={brandNewModelsBoxStyle}>
            <ProductsSlider
              title={'Brand new models'}
              visibleProducts={products}
            />
          </Box>
        </Grid>

        {/* Shop by category */}
        <Grid>
          <Box sx={categoryBoxStyle}>
            <Typography variant="h2" align={'left'} sx={categoryTitleStyle}>
              Shop by category
            </Typography>
            <Grid
              container
              spacing={{
                mobile: 4,
                tablet: 2,
                desktop: 2,
              }}
            >
              {['Mobile phones', 'Tablets', 'Accessories'].map(label => (
                <Grid key={label} size={{ mobile: 4, tablet: 4, desktop: 8 }}>
                  <Box sx={categoryItemBoxStyle}>
                    <div className={'card'}>{label}</div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Hot prices */}
        <Grid sx={{ width: '100%' }}>
          <Box sx={hotPricesBoxStyle}>
            <ProductsSlider title={'Hot prices'} visibleProducts={products} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
