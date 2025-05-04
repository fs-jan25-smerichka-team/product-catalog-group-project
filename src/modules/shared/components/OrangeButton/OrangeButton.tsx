import Button from '@mui/material/Button';
import React from 'react';
import { useTheme } from '@mui/material/styles';

import { OrangeButtonStyle } from './OrangeButtonStyle';

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
      variant={isSelected ? 'outlined' : 'contained'}
      onClick={onClick}
      color="warning"
      sx={OrangeButtonStyle(isSelected)}
    >
      {children}
    </Button>
  );
};
