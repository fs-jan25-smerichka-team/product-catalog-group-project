import { Box, Grid, Typography } from '@mui/material';

import { ProductCard } from '../Shared/ProductCard/ProductCard';
import {
  brandNewModelsBoxStyle,
  categoryBoxStyle,
  categoryItemBoxStyle,
  categoryTitleStyle,
  heroBoxStyle,
  heroTitleStyle,
  homePageGridStyle,
  hotPricesBoxStyle,
  hotPricesCardWrapperStyle,
} from './HomePageStyle';

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
        sx={homePageGridStyle}
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
        <Grid>
          <Box sx={brandNewModelsBoxStyle}>
            <Typography variant="h2" sx={categoryTitleStyle}>
              Brand new models
            </Typography>
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
        <Grid>
          <Box sx={hotPricesBoxStyle}>
            <Typography variant="h2" sx={categoryTitleStyle}>
              Hot prices
            </Typography>
            <Box sx={hotPricesCardWrapperStyle}>
              <ProductCard
                product={{
                  id: 0,
                  category: '',
                  itemId: '',
                  name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
                  fullPrice: 999,
                  price: 799,
                  screen: "4.7' IPS",
                  capacity: '32GB',
                  color: 'black',
                  ram: '2GB',
                  year: 0,
                  image: 'img/phones/apple-iphone-11-pro-max/spacegray/00.webp',
                }}
              ></ProductCard>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
