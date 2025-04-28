import React from 'react';
import { Button, Typography } from '@mui/material';

import { selectorButtonStyle } from './SelectorButtonStyle';

type Props = {
  value: string;
  isSelected: boolean;
};

export const SelectorButton: React.FC<Props> = ({
  value,
  isSelected = false,
}) => {
  return (
    <Button
      value={value}
      variant={isSelected ? 'contained' : 'outlined'}
      sx={selectorButtonStyle(isSelected)}
    >
      <Typography>{value}</Typography>
    </Button>
  );
};
