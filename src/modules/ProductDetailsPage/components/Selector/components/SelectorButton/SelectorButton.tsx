import React from 'react';
import { Button, Typography } from '@mui/material';

import { selectorButtonStyle } from './SelectorButtonStyle';

type Props = {
  value: string;
  isSelected: boolean;
  onClick: (value: string) => void;
};

export const SelectorButton: React.FC<Props> = ({
  value,
  isSelected = false,
  onClick,
}) => {
  return (
    <Button
      value={value}
      variant={isSelected ? 'contained' : 'outlined'}
      sx={selectorButtonStyle(isSelected)}
      onClick={() => onClick(value)}
    >
      <Typography>{value}</Typography>
    </Button>
  );
};
