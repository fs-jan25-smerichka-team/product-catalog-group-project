import {
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';

import { OrangeButton } from '../../../shared/components/OrangeButton/OrangeButton';

interface Props {
  cost: number;
  quantity: number;
}

export const CartSummary: React.FC<Props> = ({ cost, quantity }) => {
  const theme = useTheme();
  return (
    <Card variant="outlined" sx={{ padding: '24px' }}>
      <CardHeader>
        <Typography variant="h2" color={theme.palette.primary.main}>
          `$${cost}`
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="body1" color={theme.palette.secondary.dark}>
          `Total for ${quantity} items`
        </Typography>
      </CardContent>
      <Divider
        variant="middle"
        sx={theme => ({
          color: theme.palette.secondary.light,
        })}
      />
      <CardActions>
        <OrangeButton isSelected={false} onClick={() => {}}>
          'Checkout'
        </OrangeButton>
      </CardActions>
    </Card>
  );
};
