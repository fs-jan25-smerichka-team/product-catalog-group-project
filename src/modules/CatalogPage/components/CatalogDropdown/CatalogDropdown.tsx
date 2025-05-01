import { Box, Typography } from '@mui/material';
import React from 'react';

import { Dropdown } from '../../../shared/components/Dropdown/Dropdown';
import { dropdownContainerStyle } from './CatalogDropdownStyles';
import { PerPage, SortBy } from '../../../../utils/Types';

type Props = {
  label: string;
  items: SortBy[] | PerPage[];
  activeItem: string;
  onSelect: (value: string) => void;
};

export const CatalogDropdown: React.FC<Props> = ({
  label,
  items,
  activeItem,
  onSelect,
}) => (
  <Box sx={dropdownContainerStyle}>
    <Typography variant="body2" color="textSecondary">
      {label}
    </Typography>

    <Dropdown items={items} activeItem={activeItem} onSelect={onSelect} />
  </Box>
);
