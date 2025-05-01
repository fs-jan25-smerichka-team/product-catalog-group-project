import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';

import { OrangeButton } from '../../../shared/components/OrangeButton/OrangeButton';
import { useCartItems } from '../../../../utils/hooks/useCartItems';
import { CheckoutButtonStyle, CheckoutDialogStyle } from './CartCheckoutStyles';

export default function CartCheckout() {
  const { clearCart } = useCartItems();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            sx: CheckoutDialogStyle,
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" variant="h3">
          Checkout is not implemented yet.
          <br /> Do you wan't to clear the Cart?
        </DialogTitle>
        <DialogActions>
          <OrangeButton isSelected={true} onClick={handleClose}>
            <Typography variant="button">Keep cart and close</Typography>
          </OrangeButton>
          <OrangeButton
            isSelected={false}
            onClick={() => {
              clearCart();
              handleClose();
            }}
          >
            <Typography variant="button">Clear cart and close</Typography>
          </OrangeButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
