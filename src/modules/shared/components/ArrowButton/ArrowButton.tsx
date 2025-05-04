import { IconButton, useTheme } from '@mui/material';

import rightIcon from '../../../../assets/icons/arrow-right.svg';
import rightDisIcon from '../../../../assets/icons/arrow-right-dis.svg';
import leftIcon from '../../../../assets/icons/arrow-left.svg';
import leftDisIcon from '../../../../assets/icons/arrow-left-dis.svg';
import { ArrowButtonStyle } from './ArrowButtonStyle';

type Props = {
  direction: string;
  isBtnDisabled: boolean;
  handleClickArrow: (direction: string) => void;
};

export const ArrowButton: React.FC<Props> = ({
  isBtnDisabled,
  direction,
  handleClickArrow,
}) => {
  const theme = useTheme();

  const getIcon = () => {
    if (direction === 'left') {
      return isBtnDisabled ? leftDisIcon : leftIcon;
    } else {
      return isBtnDisabled ? rightDisIcon : rightIcon;
    }
  };

  return (
    <IconButton
      onClick={() => handleClickArrow(direction)}
      sx={ArrowButtonStyle(isBtnDisabled)}
      disabled={isBtnDisabled}
    >
      <img src={getIcon()} alt={`${direction} arrow`} width={16} height={16} />
    </IconButton>
  );
};
