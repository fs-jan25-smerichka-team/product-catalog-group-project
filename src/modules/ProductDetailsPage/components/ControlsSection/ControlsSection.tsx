import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { SpecsInfo } from '../../../shared/components/SpecsInfo/SpecsInfo';
import { ProductControlsSection } from '../../../shared/components/ProductControls/ProductControls';
import { fullPriceTypographyStyle } from '../../../shared/ProductCard/ProductCardStyle';
import { Selector } from '../Selector/Selector';
import { SelectorButton } from '../Selector/components/SelectorButton/SelectorButton';
import { SelectorColorButton } from '../Selector/components/SelectorColorButton/SelectorColorButton';
import { NewProductOptions, ProductDetailsInfo } from '../../../../utils/Types';
import { getMainSpecs } from '../../../../utils/functions/getProductSpecs';
import {
  capacitySelectorContainerStyle,
  colorSelectorContainerStyle,
  controlsContainerStyle,
  dividerControlsStyle,
  PriceAndButtonsStyle,
  specsInfoContainerStyle,
} from './ControlsSectionStyles';

type Props = {
  product: ProductDetailsInfo;
  onProductChange: (options: NewProductOptions) => void;
};

export const ControlsSection: React.FC<Props> = ({
  product,
  onProductChange,
}) => {
  const { category } = useParams();

  return (
    <Box sx={controlsContainerStyle}>
      <Box sx={colorSelectorContainerStyle}>
        <Selector
          label={'Available colors'}
          options={product.colorsAvailable}
          selectedOption={product.color}
          OptionButton={SelectorColorButton}
          onSelect={newColor => onProductChange({ color: newColor })}
        />
      </Box>

      <Divider sx={dividerControlsStyle} />

      <Box sx={capacitySelectorContainerStyle}>
        <Selector
          label={`Select ${category === 'accessories' ? 'size' : 'capacity'}`}
          options={product.capacityAvailable}
          selectedOption={product.capacity}
          OptionButton={SelectorButton}
          onSelect={newCapacity => onProductChange({ capacity: newCapacity })}
        />
      </Box>

      <Divider sx={dividerControlsStyle} />

      <Box sx={PriceAndButtonsStyle.container}>
        <Box sx={PriceAndButtonsStyle.priceContainer}>
          <Typography variant="h3" color="primary.main">
            ${product.priceDiscount}
          </Typography>

          {product.priceDiscount !== product.priceRegular && (
            <Typography variant="h3" sx={fullPriceTypographyStyle}>
              ${product.priceRegular}
            </Typography>
          )}
        </Box>

        <Box sx={PriceAndButtonsStyle.buttonsContainer}>
          <ProductControlsSection itemId={product.id} size="big" />
        </Box>
      </Box>

      <Box sx={specsInfoContainerStyle}>
        <SpecsInfo specs={getMainSpecs(product)} textVariant="body2" />
      </Box>
    </Box>
  );
};
