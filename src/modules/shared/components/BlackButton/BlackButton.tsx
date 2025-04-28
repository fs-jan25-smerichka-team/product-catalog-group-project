import Button from '@mui/material/Button';
import React from 'react';

import { blackButtonStyle } from './BlackButtonStyle';

type Props = {
  onClick: () => void;
  isSelected: boolean;
  children: React.ReactNode;
};

export const BlackButton: React.FC<Props> = ({
  isSelected = false,
  onClick,
  children,
}) => {
  return (
    <Button
      variant={isSelected ? 'contained' : 'outlined'}
      onClick={onClick}
      color="primary"
      sx={blackButtonStyle(isSelected)}
    >
      {children}
    </Button>
  );
};
