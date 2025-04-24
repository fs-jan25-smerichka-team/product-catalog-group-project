import Button from '@mui/material/Button';
import React from 'react';
import { useTheme } from '@mui/material/styles';

import { BlackButtonStyle } from './BlackButtonStyle';

type Props = {
  onClick: () => void;
  isSelected: boolean;
  children: React.ReactNode;
};

export const OrangeButton: React.FC<Props> = ({
  isSelected = false,
  onClick,
  children,
}) => {
  const theme = useTheme();

  return (
    <Button
      variant={isSelected ? 'contained' : 'outlined'}
      onClick={onClick}
      color="primary"
      sx={BlackButtonStyle(isSelected, theme)}
    >
      {children}
    </Button>
  );
};
