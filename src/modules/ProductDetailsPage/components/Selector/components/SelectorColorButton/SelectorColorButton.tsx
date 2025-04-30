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
};

export const SelectorColorButton: React.FC<Props> = ({
  value,
  isSelected = false,
}) => {
  const theme = useTheme();

  return (
    <Button
      value={value}
      variant={'outlined'}
      sx={selectorColorButtonStyle(isSelected, theme)}
    >
      <Box sx={innerCircleBoxStyle(value)} />
    </Button>
  );
};
