import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import { ProductDetailsInfo } from '../../../../utils/Types';
import { Selector } from '../Selector/Selector';
import { SelectorButton } from '../Selector/components/SelectorButton/SelectorButton';
import { OrangeButton } from '../../../shared/components/OrangeButton/OrangeButton';
import { FavoriteButton } from '../../../shared/components/FavoriteButton/FavoriteButton';
import { SpecsInfo } from '../../../shared/components/SpecsInfo/SpecsInfo';
import {
  capacitySelectorContainerStyle,
  colorSelectorContainerStyle,
  controlsContainerStyle,
  dividerControlsStyle,
  PriceAndButtonsStyle,
  specsInfoContainerStyle,
} from './ControlsSectionStyles';
import { fullPriceTypographyStyle } from '../../../shared/ProductCard/ProductCardStyle';
import { getMainSpecs } from '../../../../utils/functions/getProductSpecs';
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
        <OrangeButton onClick={() => {}} isSelected={false}>
          <Typography variant="button">Add to cart</Typography>
        </OrangeButton>

        <FavoriteButton onClick={() => {}} isSelected={false} size="big" />
      </Box>
    </Box>

    <Box sx={specsInfoContainerStyle}>
      <SpecsInfo specs={getMainSpecs(product)} textVariant="body2" />
    </Box>
  </Box>
);
