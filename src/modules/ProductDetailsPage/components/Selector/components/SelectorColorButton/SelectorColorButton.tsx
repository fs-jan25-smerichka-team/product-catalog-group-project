import Button from '@mui/material/Button';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import {
  innerCircleBoxStyle,
  selectorColorButtonStyle,
} from './SelectorColorButtonStyle';

type Props = {
  value: string;
  isSelected: boolean;
  onClick: (value: string) => void;
};

export const SelectorColorButton: React.FC<Props> = ({
  value,
  isSelected = false,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Button
      value={value}
      onClick={() => onClick(value)}
      variant={'outlined'}
      sx={selectorColorButtonStyle(isSelected)}
    >
      <Box sx={innerCircleBoxStyle(value)} />
    </Button>
  );
};
