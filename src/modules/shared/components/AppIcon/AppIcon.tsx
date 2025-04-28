import { IconButton, IconButtonProps } from '@mui/material';

import appIcon from '../../../../assets/logo/app_logo.png';
import { appIconStyles } from './appIconStyles';

export const AppIcon: React.FC<IconButtonProps> = ({ sx, ...props }) => {
  return (
    <IconButton
      disableRipple
      sx={{
        ...appIconStyles,
        ...sx,
      }}
      {...props}
    >
      <img src={appIcon} alt="Nice gadgets icon" />
    </IconButton>
  );
};
