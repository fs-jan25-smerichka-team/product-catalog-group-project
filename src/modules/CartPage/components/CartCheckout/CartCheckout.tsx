import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, useTheme } from '@mui/material';

import { OrangeButton } from '../../../shared/components/OrangeButton/OrangeButton';
import { CheckoutButtonStyle, CheckoutDialogStyle } from './CartCheckoutStyles';

export default function CartCheckout() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //TODO implement handleClearCart

  return (
    <>
      <Box sx={CheckoutButtonStyle}>
        <OrangeButton isSelected={false} onClick={handleClickOpen}>
          <Typography variant="button">Checkout</Typography>
        </OrangeButton>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        slotProps={{
          paper: {
            sx: CheckoutDialogStyle(theme),
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h3">
            Checkout is not implemented yet.
            <br /> Do you wan't to clear the Cart?
          </Typography>
        </DialogTitle>
        <DialogActions>
          <OrangeButton isSelected={true} onClick={handleClose}>
            <Typography variant="button">Keep cart and close</Typography>
          </OrangeButton>
          <OrangeButton isSelected={false} onClick={handleClose}>
            <Typography variant="button">Clear cart and close</Typography>
          </OrangeButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
