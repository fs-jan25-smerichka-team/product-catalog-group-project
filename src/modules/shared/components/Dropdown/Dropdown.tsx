import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import { DropdownElementStyle, DropdownStyle } from './DropdownStyle';
import { PerPage, SortBy } from '../../../../utils/Types';

interface Props {
  items: SortBy[] | PerPage[];
  activeItem: string;
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<Props> = ({ items, activeItem, onSelect }) => {
  const theme = useTheme();
  const activeValue = activeItem.toLowerCase();

  return (
    <FormControl fullWidth>
      <Select
        value={activeValue}
        onChange={event => onSelect(event.target.value)}
        sx={DropdownStyle(theme)}
        MenuProps={{
          sx: { borderColor: theme.palette.secondary.contrastText },
        }}
      >
        {items.map(item => (
          <MenuItem sx={DropdownElementStyle(theme)} value={item.toLowerCase()}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
