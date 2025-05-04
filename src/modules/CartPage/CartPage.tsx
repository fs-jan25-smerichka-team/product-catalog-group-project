import { Box, Grid, Typography, useTheme } from '@mui/material';

import { BackButton } from '../shared/components/BackButton/BackButton';
import { CartList } from './components/CartList/CartList';
import { CartSummary } from './components/CartSummary/CartSummary';
import { useCartItems } from '../../utils/hooks/useCartItems';
import { CartGridStyle } from './CartStyles';
import { Loader } from '../shared/components/Loader/Loader';

const CartPage: React.FC = () => {
  const theme = useTheme();
  const { cartItems, isPending } = useCartItems();

  return (
    <Grid container rowSpacing={4} columnSpacing={2} sx={CartGridStyle(theme)}>
      <Grid size={{ mobile: 4, tablet: 12, desktop: 24 }}>
        <BackButton />
      </Grid>

      <Grid size={{ mobile: 4, tablet: 12, desktop: 24 }}>
        <Typography variant="h1">Cart</Typography>
      </Grid>

      {isPending ? (
        <Loader />
      ) : (
        <Box display={'contents'}>
          <Grid size={{ mobile: 4, tablet: 12, desktop: 16 }}>
            {isPending ? <Loader /> : <CartList cartItems={cartItems} />}
          </Grid>

          <Grid size={{ mobile: 4, tablet: 12, desktop: 8 }}>
            <CartSummary
              cost={cartItems.reduce(
                (acc: number, item) => acc + item.price * item.quantity,
                0,
              )}
              quantity={cartItems.reduce(
                (acc: number, item) => acc + item.quantity,
                0,
              )}
            />
          </Grid>
        </Box>
      )}
    </Grid>
  );
};

export default CartPage;
