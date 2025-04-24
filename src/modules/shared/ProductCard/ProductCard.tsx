import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

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
  priceBoxStyle,
  specLabelTypographyStyle,
  specRowBoxStyle,
  specsBoxStyle,
} from './ProductCardStyle';

type Props = {
  product: ProductCardInfo;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, fullPrice, screen, capacity, ram, image } = product;

  return (
    <Card sx={cardStyle}>
      <Box sx={imageBoxStyle}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={cardMediaStyle}
        />
      </Box>

      <CardContent sx={cardContentStyle}>
        <Typography
          variant="body1"
          color="primary.main"
          sx={nameTypographyStyle}
        >
          {name}
        </Typography>

        <Box sx={priceBoxStyle}>
          <Typography variant="h3" color="primary.main">
            ${price}
          </Typography>
          {price !== fullPrice && (
            <Typography variant="h3" sx={fullPriceTypographyStyle}>
              ${fullPrice}
            </Typography>
          )}
        </Box>

        <Divider sx={dividerStyle} />

        <Box sx={specsBoxStyle}>
          <SpecRow label="Screen" value={screen} />
          <SpecRow label="Capacity" value={capacity} />
          <SpecRow label="RAM" value={ram} />
        </Box>

        <Box sx={buttonBoxStyle}>
          <OrangeButton onClick={() => {}} isSelected={false}>
            <Typography variant="button">Add to cart</Typography>
          </OrangeButton>
          <FavoriteButton onClick={() => {}} isSelected={false} />
        </Box>
      </CardContent>
    </Card>
  );
};

const SpecRow = ({ label, value }: { label: string; value: string }) => (
  <Box sx={specRowBoxStyle}>
    <Typography variant="body2" sx={specLabelTypographyStyle}>
      {label}
    </Typography>
    <Typography variant="body2">{value}</Typography>
  </Box>
);
