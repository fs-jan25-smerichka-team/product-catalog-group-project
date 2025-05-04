import React, { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css';
//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css/navigation';
//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css/thumbs';
//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css/free-mode';

import { ProductDetailsInfo } from '../../../../utils/Types';
import {
  containerStyle,
  mainImageStyle,
  paginationStyle,
} from './GalleryStyles';

type Props = {
  product: ProductDetailsInfo;
};

export const Gallery: React.FC<Props> = ({ product }) => {
  const { images } = product;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));

  return (
    <Box sx={containerStyle}>
      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction={isTablet ? 'vertical' : 'horizontal'}
        slidesPerView="auto"
        spaceBetween={'8px'}
        watchSlidesProgress
        allowTouchMove={false}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{
          height: 'fit-content',
          order: isTablet ? 1 : 2,
        }}
      >
        {images.map(image => (
          <SwiperSlide
            key={image}
            style={{ height: 'auto', width: 'auto' }}
            className="thumb-slide"
          >
            <Box component="img" src={image} alt={image} sx={paginationStyle} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Image */}
      <Swiper
        loop
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '1 / 1',
          order: isTablet ? 2 : 1,
        }}
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <Box component="img" src={image} alt={image} sx={mainImageStyle} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
