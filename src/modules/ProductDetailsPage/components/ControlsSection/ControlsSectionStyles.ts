import { SxProps, Theme } from '@mui/material/styles';

export const colorSelectorAndIdContainerStyle: SxProps<Theme> = {
  marginTop: '40px',
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export const colorSelectorAndIdBoxStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

export const capacitySelectorContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginY: '24px',
  height: '55px',
};

export const dividerControlsStyle: SxProps<Theme> = {
  marginTop: '24px',
};

export const PriceAndButtonsContainerStyle: SxProps<Theme> = {
  marginTop: '32px',
};

export const priceContainerStyle: SxProps<Theme> = {
  display: 'flex',
  gap: '8px',
};

export const buttonsContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  height: '48px',
  marginTop: '16px',
};

export const specsInfoContainerStyle: SxProps<Theme> = {
  marginTop: '32px',
};
