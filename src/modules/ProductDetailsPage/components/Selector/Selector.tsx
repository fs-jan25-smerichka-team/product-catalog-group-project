import { Typography, Box, Stack } from '@mui/material';

import { SelectorButton } from './components/SelectorButton/SelectorButton';
import { SelectorStyle } from './SelectorStyles';

type Props = {
  label: string;
  options: string[];
  selectedOption: string;
  onSelect: (value: string) => void;
  OptionButton: typeof SelectorButton;
};

export const Selector: React.FC<Props> = ({
  label,
  options,
  selectedOption,
  onSelect,
  OptionButton,
}) => {
  const handleChange = (newValue: string) => onSelect(newValue);

  return (
    <Box>
      <Typography variant="body2" sx={SelectorStyle.titleContainer}>
        {label}
      </Typography>

      <Stack
        direction={'row'}
        sx={SelectorStyle.optionsContainer}
        role="group"
        aria-label={label}
      >
        {options.map(option => (
          <OptionButton
            key={option}
            value={option}
            isSelected={selectedOption === option}
            onClick={handleChange}
          />
        ))}
      </Stack>
    </Box>
  );
};
