import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import {
  backButtonStyle,
  buttonContentStyle,
  buttonTextStyle,
  buttonIconStyle,
} from './BackButtonStyles';
import ArrowIcon from '../../../../assets/icons/arrow-left.svg';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button variant="text" sx={backButtonStyle} onClick={() => navigate(-1)}>
      <Box sx={buttonContentStyle}>
        <img src={ArrowIcon} alt="Back" style={buttonIconStyle} />
        <Typography variant="body2" sx={buttonTextStyle}>
          Back
        </Typography>
      </Box>
    </Button>
  );
};
