import { SxProps, Theme } from '@mui/material/styles';

export const sliderHeaderStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
};

export const swiperBoxStyle = (
  isLastSlideVisible: boolean,
): SxProps<Theme> => ({
  marginRight: isLastSlideVisible
    ? '0px'
    : {
        mobile: '-16px',
        tablet: '-24px',
        desktop: '0px',
      },
  height: {
    mobile: '439px',
    tablet: '512px',
    desktop: '506px',
  },
});
