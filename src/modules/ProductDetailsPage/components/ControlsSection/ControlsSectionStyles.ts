import { SxProps, Theme } from '@mui/material/styles';

export const controlsContainerStyle: SxProps<Theme> = {
  maxWidth: { tablet: '320px' },
};

export const colorSelectorContainerStyle: SxProps<Theme> = {
  marginBottom: '24px',
  display: 'flex',
  height: '55px',
};

export const capacitySelectorContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginY: '24px',
  height: '55px',
};

export const dividerControlsStyle: SxProps<Theme> = {
  marginTop: '24px',
};

export const PriceAndButtonsStyle: Record<string, SxProps<Theme>> = {
  container: {
    marginTop: '32px',
  },

  priceContainer: {
    display: 'flex',
    gap: '8px',
  },

  buttonsContainer: {
    marginTop: '16px',
  },
};

export const specsInfoContainerStyle: SxProps<Theme> = {
  marginTop: '32px',
};
