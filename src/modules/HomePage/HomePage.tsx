import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { homePageStyle } from './HomePageStyle';
import { getProducts } from '../../utils/api';
import { ProductsSlider } from '../shared/components/ProductsSlider/ProductsSlider';
import { ShopByCategorySection } from './components/ShopByCategorySection';
import { useHotPricesProducts } from '../../utils/hooks/useHotPricesProducts';
import { useBrandNewProducts } from '../../utils/hooks/useBrandNewProducts';
import { PicturesSlider } from './components/PicturesSlider';

export const HomePage: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const products = data || [];

  const hotPricesProducts = useHotPricesProducts(products);
  const brandNewProducts = useBrandNewProducts(products);

  return (
    <Stack direction="column">
      {/* Title Section */}
      <Box sx={homePageStyle.titleContainer}>
        <Typography variant="h1">Welcome to Nice Gadgets store!</Typography>
      </Box>

      <Stack sx={homePageStyle.contentContainer}>
        {/* Banner Section */}
        <Box sx={homePageStyle.bannerContainer}>
          <PicturesSlider />
        </Box>

        {/* Brand new models */}
        {brandNewProducts.length > 0 && (
          <Box sx={homePageStyle.sliderContainer}>
            <ProductsSlider
              title={'Brand new models'}
              visibleProducts={brandNewProducts}
            />
          </Box>
        )}

        {/* Shop by category */}
        <ShopByCategorySection />

        {/* Hot prices */}
        {hotPricesProducts.length > 0 && (
          <Box sx={homePageStyle.sliderContainer}>
            <ProductsSlider
              title={'Hot prices'}
              visibleProducts={hotPricesProducts}
            />
          </Box>
        )}
      </Stack>
    </Stack>
  );
};
