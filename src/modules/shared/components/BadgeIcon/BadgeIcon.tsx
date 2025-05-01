import { Badge, BadgeProps, SxProps, Theme } from '@mui/material';

import { BadgeStyles } from './BadgeIconStyles';

interface BadgeIconProps {
  badgeContent: number;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  color?: BadgeProps['color'];
  max?: number;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  badgeContent,
  children,
  sx,
  color = 'info',
  max = 99,
}) => {
  const shouldShowBadge = badgeContent > 0;

  if (!shouldShowBadge) {
    return <>{children}</>;
  }

  return (
    <Badge
      sx={{ ...BadgeStyles, ...sx }}
      color={color}
      overlap="circular"
      badgeContent={badgeContent > max ? max : badgeContent}
      max={max}
    >
      {children}
    </Badge>
  );
};
