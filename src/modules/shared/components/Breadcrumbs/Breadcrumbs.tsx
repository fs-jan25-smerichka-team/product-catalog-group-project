import { Link as MuiLink, Stack, Typography, Breadcrumbs } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

import homeIcon from '../../../../assets/icons/home.svg';
import rightIcon from '../../../../assets/icons/arrow-right-dis.svg';
import {
  activeBreadcrumb,
  breadcrumbLink,
  breadcrumbs,
  breadcrumbsContainer,
  homeLink,
} from './BreadcrumbsStyle';

const getBreadcrumbData = (pathnames: string[]) => {
  return pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;

    const displayName = value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { to, displayName, isLast };
  });
};

export const BreadcrumbsSection = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbData = getBreadcrumbData(pathnames);

  return (
    <Stack spacing={2} sx={breadcrumbsContainer}>
      <Breadcrumbs
        separator={<img src={rightIcon} alt="separator" />}
        aria-label="breadcrumb"
        sx={breadcrumbs}
      >
        {/* HomePage */}
        <MuiLink component={RouterLink} to="/" underline="hover" sx={homeLink}>
          <img src={homeIcon} alt="Home" width={16} height={16} />
        </MuiLink>

        {/* Dynamic paths */}
        {breadcrumbData.map(({ to, displayName, isLast }) =>
          isLast ? (
            <Typography variant="body2" key={to} sx={activeBreadcrumb}>
              {displayName}
            </Typography>
          ) : (
            <MuiLink
              component={RouterLink}
              to={to}
              underline="hover"
              key={to}
              sx={breadcrumbLink}
            >
              <Typography variant="body2">{displayName}</Typography>
            </MuiLink>
          ),
        )}
      </Breadcrumbs>
    </Stack>
  );
};
