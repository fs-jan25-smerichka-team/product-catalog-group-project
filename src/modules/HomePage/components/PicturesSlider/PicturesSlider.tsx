import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Box, useTheme, useMediaQuery, Stack } from '@mui/material';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper as SwiperClass } from 'swiper/types';

import phonesBanner from '/img/banner-phones.png';
import tabletsBanner from '/img/banner-tablets.png';
import accessoriesBanner from '/img/banner-accessories.png';

//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css';
//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css/navigation';
//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css/pagination';
import {
  containerStyle,
  paginationStyle,
  slideImageStyle,
  sliderBoxStyle,
} from './PicturesSliderStyle';
import { ArrowButton } from '../../../shared/components/ArrowButton/ArrowButton';

import { ProductCategoryType } from '@/utils/Types';

type categoryItem = {
  category: ProductCategoryType;
  label: string;
  image: string;
};

const categoryBanners: categoryItem[] = [
  {
    category: 'phones',
    label: 'Mobile phones',
    image: phonesBanner,
  },
  {
    category: 'tablets',
    label: 'Tablets',
    image: tabletsBanner,
  },
  {
    category: 'accessories',
    label: 'Accessories',
    image: accessoriesBanner,
  },
];

export const PicturesSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));

  return (
    <Stack direction={'column'} spacing={'18px'} sx={containerStyle}>
      <Box sx={sliderBoxStyle}>
        {isTablet && (
          <ArrowButton
            direction="left"
            isBtnDisabled={false}
            handleClickArrow={() => swiperRef.current?.slidePrev()}
          />
        )}

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          navigation={false}
          pagination={{
            el: '.custom-swiper-pagination',
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className}"></span>`,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {categoryBanners.map(({ category, label, image }) => (
            <SwiperSlide key={label}>
              <Link to={category} style={{ textDecoration: 'none' }}>
                <Box
                  component="img"
                  src={image}
                  alt="Slide"
                  sx={slideImageStyle}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {isTablet && (
          <ArrowButton
            direction="right"
            isBtnDisabled={false}
            handleClickArrow={() => swiperRef.current?.slideNext()}
          />
        )}
      </Box>

      <Box className="custom-swiper-pagination" sx={paginationStyle(theme)} />
    </Stack>
  );
};
