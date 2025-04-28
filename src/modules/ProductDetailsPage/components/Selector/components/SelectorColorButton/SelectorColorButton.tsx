import Button from '@mui/material/Button';
import React from 'react';

import { selectorColorButtonStyle } from './SelectorColorButtonStyle';

type Props = {
  value: string;
  isSelected: boolean;
};

export const SelectorColorButton: React.FC<Props> = ({
  value,
  isSelected = false,
}) => {
  return (
    <Button
      value={value}
      variant={isSelected ? 'contained' : 'outlined'}
      sx={selectorColorButtonStyle(value, isSelected)}
    />
  );
};
