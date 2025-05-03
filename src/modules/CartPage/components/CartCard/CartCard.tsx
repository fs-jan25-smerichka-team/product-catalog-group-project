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
import { Link } from 'react-router-dom';

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
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid size={{ mobile: 0.2, tablet: 'auto', desktop: 'auto' }}>
          <IconButton
            onClick={() => removeCartItem(item.id)}
            sx={{ padding: 0, ...DeleteButtonStyle }}
            disableRipple
          >
            <CloseIcon />
          </IconButton>
        </Grid>

        <Link
          to={`/${item.category}/${item.id}`}
          style={{ textDecoration: 'none', display: 'contents' }}
        >
          <Grid
            size={{ mobile: 1, tablet: 'auto', desktop: 'auto' }}
            justifySelf="flex-start"
          >
            <CardMedia
              component="div"
              image={item.image}
              sx={{
                ...CardImageStyle,
                '&:hover': {
                  backgroundColor: '#EEF1F3',
                  borderRadius: 1,
                },
              }}
            />
          </Grid>

          <Grid size={{ mobile: 2.7, tablet: 'grow', desktop: 'grow' }}>
            <CardContent sx={CardTextStyle}>
              <Typography
                variant="body1"
                color={theme.palette.primary.main}
                sx={{ '&:hover': { textDecoration: 'underline' } }}
              >
                {item.name}
              </Typography>
            </CardContent>
          </Grid>
        </Link>

        <Grid size={{ mobile: 2.5, tablet: 'auto', desktop: 'auto' }}>
          <CardActions sx={CardActionsStyle}>
            <IconButton
              onClick={() => decreaseQuantity(item.id)}
              sx={CounterButtonStyle}
              disableRipple
              disabled={item.quantity <= 1}
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
            <Typography variant="h3">${item.price}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
