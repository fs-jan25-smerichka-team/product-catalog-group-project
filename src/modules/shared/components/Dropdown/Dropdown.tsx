import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import { DropdownElementStyle, DropdownStyle } from './DropdownStyle';

interface Props {
  items: string[]; //SortType[] | PerPage[];
  activeItem: string;
  helperText: string;
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<Props> = ({
  items,
  activeItem,
  helperText,
  onSelect,
}) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth>
      <Select
        value={activeItem}
        onChange={event => onSelect(event.target.value as string)}
        sx={DropdownStyle(theme)}
        MenuProps={{
          sx: { borderColor: theme.palette.secondary.contrastText },
        }}
      >
        {items.map(item => (
          <MenuItem sx={DropdownElementStyle(theme)} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
