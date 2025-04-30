import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import { ArrowButton } from '../ArrowButton/ArrowButton';
import { ProductCardInfo } from '../../../../utils/Types';
import { ProductCard } from '../../ProductCard/ProductCard';
import { sliderHeaderStyle, swiperBoxStyle } from './ProductsSliderStyle';

//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css';

type Props = {
  title: string;
  visibleProducts: ProductCardInfo[];
};

export const ProductsSlider: React.FC<Props> = ({ title, visibleProducts }) => {
  const theme = useTheme();
  const [currSlide, setCurrSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleClickArrow = (direction: string) => {
    if (!swiperRef.current) return;

    if (direction === 'left') {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    } else {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }
  };

  const isPrevBtnDisabled = currSlide === 0;
  const isNextBtnDisabled =
    swiperInstance?.isEnd ?? currSlide >= visibleProducts.length - 1;

  const isLastSlideVisible = swiperInstance?.isEnd ?? false;

  return (
    <Box>
      {/* Header */}
      <Box sx={sliderHeaderStyle}>
        <Typography variant="h2">{title}</Typography>

        <Stack direction="row" spacing={'16px'}>
          <ArrowButton
            direction="left"
            isBtnDisabled={isPrevBtnDisabled}
            handleClickArrow={handleClickArrow}
          />

          <ArrowButton
            direction="right"
            isBtnDisabled={isNextBtnDisabled}
            handleClickArrow={handleClickArrow}
          />
        </Stack>
      </Box>

      <Box sx={swiperBoxStyle(isLastSlideVisible)}>
        <Swiper
          style={{ height: '100%' }}
          slidesPerView={1}
          spaceBetween={'16px'}
          onSlideChange={swiper => setCurrSlide(swiper.activeIndex)}
          onSwiper={swiper => {
            swiperRef.current = swiper;
            setSwiperInstance(swiper);
          }}
          onResize={() => swiperRef.current?.update()}
          watchOverflow={true}
          centeredSlides={false}
          breakpoints={{
            [theme.breakpoints.values.mobile]: {
              slidesPerView: 1.5,
            },
            [theme.breakpoints.values.tablet]: {
              slidesPerView: 2.5,
            },
            [theme.breakpoints.values.custom]: {
              slidesPerView: 3.5,
            },
            [theme.breakpoints.values.desktop]: {
              slidesPerView: 4,
            },
          }}
        >
          {visibleProducts.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
