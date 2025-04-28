import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import favoriteIcon from '../../../../assets/icons/favorite.svg';
import favoriteFilledIcon from '../../../../Assets/icons/favorite_filled.svg';
import { FavoriteButtonStyle } from './FavoriteButtonStyle.ts';

type Props = {
  onClick: () => void;
  isSelected: boolean;
  size?: 'small' | 'big';
};

export const FavoriteButton: React.FC<Props> = ({
  isSelected,
  onClick,
  size = 'small',
}) => {
  const theme = useTheme();

  return (
    <IconButton
      onClick={onClick}
      sx={FavoriteButtonStyle(isSelected, theme, size)}
    >
      {isSelected ? (
        <img
          src={favoriteFilledIcon}
          alt="favoriteIcon"
          width={16}
          height={16}
        />
      ) : (
        <img src={favoriteIcon} alt="favoriteIcon" width={16} height={16} />
      )}
    </IconButton>
  );
};
