import {
  CardActions,
  CardContent,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';

import {
  CartSummaryCardStyle,
  CartSummaryContentStyle,
  CartSummaryDividerStyle,
} from './CartSummaryStyles';
import CartCheckout from '../CartCheckout/CartCheckout';

interface Props {
  cost: number;
  quantity: number;
}

export const CartSummary: React.FC<Props> = ({ cost, quantity }) => {
  const theme = useTheme();
  return (
    <Card variant="outlined" sx={CartSummaryCardStyle}>
      <CardContent sx={CartSummaryContentStyle}>
        <Typography
          variant="h2"
          color={theme.palette.primary.main}
          textAlign="center"
        >
          ${cost}
        </Typography>
      </CardContent>
      <CardContent sx={CartSummaryContentStyle}>
        <Typography
          variant="body1"
          color={theme.palette.secondary.dark}
          textAlign="center"
        >
          Total for {quantity} items
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={CartSummaryDividerStyle} />
      <CardActions>
        <CartCheckout />
      </CardActions>
    </Card>
  );
};
