import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SpecsInfo } from '../../../shared/components/SpecsInfo/SpecsInfo';
import { ProductControlsSection } from '../../../shared/components/ProductControls/ProductControls';
import { fullPriceTypographyStyle } from '../../../shared/ProductCard/ProductCardStyle';
import { Selector } from '../Selector/Selector';
import { SelectorButton } from '../Selector/components/SelectorButton/SelectorButton';
import { SelectorColorButton } from '../Selector/components/SelectorColorButton/SelectorColorButton';
import { ProductDetailsInfo } from '../../../../utils/Types';
import { getMainSpecs } from '../../../../utils/functions/getProductSpecs';
import { useProductDetails } from '../../../../utils/hooks/useProductDetails';
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
};

export const ControlsSection: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { category } = useParams();
  const { productsBySelectedModel } = useProductDetails();

  const [selectedValue, setSelectedValue] = useState<{
    color: string;
    capacity: string;
  }>({
    color: product.color,
    capacity: product.capacity,
  });

  const getNewProduct = (newProductOptions: {
    color?: string;
    capacity?: string;
  }) => {
    const [key, value] = Object.entries(newProductOptions)[0];

    setSelectedValue(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    const newProduct = productsBySelectedModel.find(
      item =>
        item.capacity === selectedValue.capacity &&
        item.color === selectedValue.color,
    );

    if (newProduct && newProduct.id !== product.id) {
      navigate(`/${category}/${newProduct.id}`, { replace: true });
    }
  }, [selectedValue, productsBySelectedModel, navigate, category, product.id]);

  return (
    <Box sx={controlsContainerStyle}>
      <Box sx={colorSelectorContainerStyle}>
        <Selector
          label={'Available colors'}
          options={product.colorsAvailable}
          selectedOption={selectedValue.color}
          OptionButton={SelectorColorButton}
          onSelect={newColor => getNewProduct({ color: newColor })}
        />
      </Box>

      <Divider sx={dividerControlsStyle} />

      <Box sx={capacitySelectorContainerStyle}>
        <Selector
          label={`Select ${category === 'accessories' ? 'size' : 'capacity'}`}
          options={product.capacityAvailable}
          selectedOption={selectedValue.capacity}
          OptionButton={SelectorButton}
          onSelect={newCapacity => getNewProduct({ capacity: newCapacity })}
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
