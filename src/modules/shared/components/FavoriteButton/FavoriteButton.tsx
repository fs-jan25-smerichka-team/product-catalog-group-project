import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import favoriteIcon from '../../../../assets/icons/favorite.svg';
import favoriteFilledIcon from '../../../../Assets/icons/favorite_filled.svg';
import { FavoriteButtonStyle } from './FavoriteButtonStyle.ts';

type Props = {
  onClick: () => void;
  isSelected: boolean;
};

export const FavoriteButton: React.FC<Props> = ({ isSelected, onClick }) => {
  const theme = useTheme();

  return (
    <IconButton onClick={onClick} sx={FavoriteButtonStyle(isSelected, theme)}>
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
