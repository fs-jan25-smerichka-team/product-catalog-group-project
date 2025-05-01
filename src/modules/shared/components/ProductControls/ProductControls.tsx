import { Typography, Stack } from '@mui/material';

import { OrangeButton } from '../OrangeButton/OrangeButton';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { useProductActions } from '../../../../utils/hooks/useProductActions';
import { buttonBoxStyle } from './ProductControlsStyles';

type Props = {
  itemId: string;
  size?: 'small' | 'big';
};

export const ProductControlsSection: React.FC<Props> = ({
  itemId,
  size = 'small',
}) => {
  const { isInCart, isInFavourites, addToCart, toggleFavourites } =
    useProductActions(itemId);

  return (
    <Stack direction={'row'} spacing={1} sx={buttonBoxStyle(size)}>
      <OrangeButton onClick={addToCart} isSelected={isInCart}>
        <Typography variant="button">
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </Typography>
      </OrangeButton>

      <FavoriteButton
        onClick={toggleFavourites}
        isSelected={isInFavourites}
        size={size}
      />
    </Stack>
  );
};
