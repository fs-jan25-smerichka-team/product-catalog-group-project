import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { CartItem } from '../../../../utils/Types';
import {
  CardActionsStyle,
  CardImageStyle,
  CardPriceStyle,
  CardTextStyle,
  CartCardStyle,
  DeleteButtonStyle,
} from './CartCardStyles';

interface Props {
  item: CartItem;
}

export const CartCard: React.FC<Props> = ({ item }) => {
  const theme = useTheme();

  return (
    <Card variant="outlined" sx={CartCardStyle}>
      <Grid
        container
        spacing={{ mobile: '16px', tablet: '24px', desktop: '24px' }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid size="auto">
          <Box sx={DeleteButtonStyle} />
          {
            //TODO - replace placeholder with IconButton
          }
        </Grid>
        <Grid size="auto">
          <CardMedia component="image" image={item.image} sx={CardImageStyle} />
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
            {/* TODO - replace placeholder with iconbuttons */}
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
