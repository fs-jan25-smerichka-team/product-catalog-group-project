import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import {
  capacitySelectorContainerStyle,
  colorSelectorContainerStyle,
  controlsContainerStyle,
  dividerControlsStyle,
  PriceAndButtonsStyle,
  specsInfoContainerStyle,
} from './ControlsSectionStyles';
import { ProductDetailsInfo } from '../../../../utils/Types';
import { getMainSpecs } from '../../../../utils/functions/getProductSpecs';
import { SpecsInfo } from '../../../shared/components/SpecsInfo/SpecsInfo';
import { ProductControlsSection } from '../../../shared/components/ProductControls/ProductControls';
import { fullPriceTypographyStyle } from '../../../shared/ProductCard/ProductCardStyle';
import { Selector } from '../Selector/Selector';
import { SelectorButton } from '../Selector/components/SelectorButton/SelectorButton';
import { SelectorColorButton } from '../Selector/components/SelectorColorButton/SelectorColorButton';

type Props = {
  product: ProductDetailsInfo;
};

export const ControlsSection: React.FC<Props> = ({ product }) => (
  <Box sx={controlsContainerStyle}>
    <Box sx={colorSelectorContainerStyle}>
      <Selector
        label={'Available colors'}
        options={product.colorsAvailable}
        selectedOption={product.color}
        OptionButton={SelectorColorButton}
        onSelect={() => {}}
      />
    </Box>

    <Divider sx={dividerControlsStyle} />

    <Box sx={capacitySelectorContainerStyle}>
      <Selector
        label={'Select capacity'}
        options={product.capacityAvailable}
        selectedOption={product.capacity}
        OptionButton={SelectorButton}
        onSelect={() => {}}
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
