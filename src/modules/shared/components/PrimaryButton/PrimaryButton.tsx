import Button from '@mui/material/Button';
import React from 'react';

type Props = {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
  size?: 'small' | 'medium';
};

export const PrimaryButton: React.FC<Props> = ({
  isActive,
  size,
  onClick,
  children,
  ...rest
}) => {
  return (
    <Button
      variant={isActive ? 'contained' : 'outlined'}
      onClick={onClick}
      {...rest}
      // className={`${styles.btn} ${isActive ? styles.active : ''}`}
    >
      {children}
    </Button>
  );
};
