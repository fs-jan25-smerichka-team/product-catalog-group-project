import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import {
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

import { CartItem } from '../../../../utils/Types';
import { useCartItems } from '../../../../utils/hooks/useCartItems';
import { CloseIcon, MinusIcon, PlusIcon } from '../../../../assets/svg';
import {
  CardActionsStyle,
  CardImageStyle,
  CardPriceStyle,
  CardTextStyle,
  CartCardStyle,
  DeleteButtonStyle,
  CounterButtonStyle,
} from './CartCardStyles';

interface Props {
  item: CartItem;
}

export const CartCard: React.FC<Props> = ({ item }) => {
  const theme = useTheme();
  const { removeCartItem, increaseQuantity, decreaseQuantity } = useCartItems();

  return (
    <Card variant="outlined" sx={CartCardStyle}>
      <Grid
        container
        spacing={{ mobile: '16px', tablet: '24px', desktop: '24px' }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid size="auto">
          <IconButton
            onClick={() => removeCartItem(item.id)}
            sx={{ padding: 0, ...DeleteButtonStyle }}
            disableRipple
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid size="auto">
          <CardMedia component="div" image={item.image} sx={CardImageStyle} />
        </Grid>
        <Grid size={{ mobile: 2, tablet: 'grow', desktop: 'grow' }}>
          <CardContent sx={CardTextStyle}>
            <Typography variant="body1" color={theme.palette.primary.main}>
              {item.name}
            </Typography>
          </CardContent>
        </Grid>
        <Grid size={{ mobile: 2, tablet: 'auto', desktop: 'auto' }}>
          <CardActions sx={CardActionsStyle}>
            <IconButton
              onClick={() => decreaseQuantity(item.id)}
              sx={{
                ...CounterButtonStyle,
                ...(item.quantity <= 1 && {
                  borderColor: theme.palette.secondary.light,
                  color: theme.palette.secondary.main,
                }),
              }}
              disableRipple
            >
              <MinusIcon />
            </IconButton>

            <Typography variant="body1">{item.quantity}</Typography>
            <IconButton
              onClick={() => increaseQuantity(item.id)}
              sx={CounterButtonStyle}
              disableRipple
            >
              <PlusIcon />
            </IconButton>
          </CardActions>
        </Grid>
        <Grid size="auto" offset="auto">
          <CardContent sx={CardPriceStyle}>
            <Typography variant="h2">${item.price}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
