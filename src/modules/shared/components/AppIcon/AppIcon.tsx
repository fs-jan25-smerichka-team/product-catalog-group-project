import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import appIcon from '../../../../assets/logo/logo.svg';

export const AppIcon: React.FC = () => {
  return (
    <Link component={RouterLink} to="/" underline="none">
      <img
        src={appIcon}
        alt="Nice Gadgets Logo"
        style={{ width: '100%', height: '100%' }}
      />
    </Link>
  );
};
