import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { ProductCardInfo } from '../../../utils/Types';
import { OrangeButton } from '../components/OrangeButton/OrangeButton';
import { FavoriteButton } from '../components/FavoriteButton/FavoriteButton';
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
import { SpecsInfo } from '../components/SpecsInfo/SpecsInfo';
import { getCardSpecs } from '../../../utils/functions/getProductSpecs';

type Props = {
  product: ProductCardInfo;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, fullPrice, image } = product;

  return (
    <Card sx={cardStyle}>
      <Link to={`${product.itemId}`} style={{ textDecoration: 'none' }}>
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
          <OrangeButton onClick={() => {}} isSelected={false}>
            <Typography variant="button">Add to cart</Typography>
          </OrangeButton>

          <FavoriteButton onClick={() => {}} isSelected={false} />
        </Stack>
      </CardContent>
    </Card>
  );
};
