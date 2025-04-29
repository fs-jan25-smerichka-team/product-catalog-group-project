import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import appIcon from '../../../../assets/logo/logo.svg';

interface AppIconProps {
  sx?: object;
}

export const AppIcon: React.FC<AppIconProps> = ({ sx = {} }) => {
  return (
    <Link component={RouterLink} to="/" underline="none" sx={sx}>
      <img src={appIcon} alt="Nice Gadgets Logo" />
    </Link>
  );
};
