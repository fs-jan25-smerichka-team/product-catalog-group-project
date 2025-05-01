import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';

import { OrangeButton } from '../components/OrangeButton/OrangeButton';
import { FavoriteButton } from '../components/FavoriteButton/FavoriteButton';
import { SpecsInfo } from '../components/SpecsInfo/SpecsInfo';
import { cartStorageItemsAtom } from '../../../state/cart';
import { favouritesStorageItemsAtom } from '../../../state/favourites';
import { CartStorageItem, ProductCardInfo } from '../../../utils/Types';
import { getCardSpecs } from '../../../utils/functions/getProductSpecs';
import {
  buttonBoxStyle,
  cardContentStyle,
  cardMediaStyle,
  cardStyle,
  dividerStyle,
  fullPriceTypographyStyle,
  imageBoxStyle,
  nameTypographyStyle,
  priceTypographyStyle,
  specsBoxStyle,
} from './ProductCardStyle';

type Props = {
  product: ProductCardInfo;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, fullPrice, image } = product;

  const [cartStorageItems, setCartStorageItems] = useAtom(cartStorageItemsAtom);
  const [favouritesStorageItems, setFavouritesStorageItems] = useAtom(
    favouritesStorageItemsAtom,
  );

  const isInCart = (itemId: string) => {
    return cartStorageItems.some(item => item.id === itemId);
  };

  const isInFavourites = (itemId: string) => {
    return favouritesStorageItems.includes(itemId);
  };

  const handleAddToCart = (itemId: string) => {
    setCartStorageItems((prev: CartStorageItem[]) => {
      const exists = prev.some(item => item.id === itemId);

      if (exists) {
        return prev;
      }

      return [...prev, { id: itemId, quantity: 1 }];
    });
  };

  const handleToggleFavourites = (itemId: string) => {
    setFavouritesStorageItems((prev: string[]) => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      }
      return [...prev, itemId];
    });
  };

  return (
    <Card sx={cardStyle}>
      <Link
        to={`/${product.category}/${product.itemId}`}
        style={{ textDecoration: 'none' }}
      >
        <Box sx={imageBoxStyle}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={cardMediaStyle}
          />
        </Box>
      </Link>

      <CardContent sx={cardContentStyle}>
        <Link to={`${product.itemId}`} style={{ textDecoration: 'none' }}>
          <Typography variant="body1" sx={nameTypographyStyle}>
            {name}
          </Typography>
        </Link>

        <Stack direction={'row'} spacing={1}>
          <Typography variant="h3" sx={priceTypographyStyle}>
            ${price}
          </Typography>
          {price !== fullPrice && (
            <Typography variant="h3" sx={fullPriceTypographyStyle}>
              ${fullPrice}
            </Typography>
          )}
        </Stack>

        <Divider sx={dividerStyle} />

        <Box sx={specsBoxStyle}>
          <SpecsInfo specs={getCardSpecs(product)} textVariant={'body2'} />
        </Box>

        <Stack direction={'row'} spacing={1} sx={buttonBoxStyle}>
          <OrangeButton
            onClick={() => handleAddToCart(product.itemId)}
            isSelected={isInCart(product.itemId)}
          >
            <Typography variant="button">
              {isInCart(product.itemId) ? 'Added to cart' : 'Add to cart'}
            </Typography>
          </OrangeButton>

          <FavoriteButton
            onClick={() => handleToggleFavourites(product.itemId)}
            isSelected={isInFavourites(product.itemId)}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};
