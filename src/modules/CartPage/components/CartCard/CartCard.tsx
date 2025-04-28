import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import {
  Box,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

import { CartItem } from '../../../../utils/Types';

interface Props {
  item: CartItem;
}

export const CartCard: React.FC<Props> = ({ item }) => {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{ padding: { mobile: '16px', tablet: '24px', desktop: '24px' } }}
    >
      <Grid container gap={{ mobile: '16px', tablet: '24px', desktop: '24px' }}>
        <Grid size="auto">
          <Box sx={{ w: '16px', h: '16px', bgcolor: 'red' }} />
          //TODO - replace placeholder with IconButton
        </Grid>
        <Grid size="auto">
          <CardMedia src={item.image} sx={{ w: '80px', h: '80px' }} />
        </Grid>
        <Grid size="grow">
          <CardContent>
            <Typography
              variant="body1"
              color={theme.palette.primary.main}
              sx={{ minWidth: '128px' }}
            >
              {item.name}
            </Typography>
          </CardContent>
        </Grid>
        <Grid size="auto">
          <CardActions
            sx={{ h: '32px', w: '96px', bgcolor: 'navy' }} //TODO - replace placeholder with iconbuttons
          ></CardActions>
        </Grid>
        <Grid size="auto">
          <CardHeader sx={{ w: '80px', justifySelf: 'right' }}>
            <Typography variant="h2">`$${item.price}`</Typography>
          </CardHeader>
        </Grid>
      </Grid>
    </Card>
  );
};
