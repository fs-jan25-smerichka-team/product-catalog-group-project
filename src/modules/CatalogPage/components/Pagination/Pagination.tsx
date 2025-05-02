import React, { useEffect, useMemo, useRef } from 'react';
import { Box, Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';

//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css';
//@ts-expect-error: Swiper CSS has no TS types
import 'swiper/css/navigation';
import { ArrowButton } from '../../../shared/components/ArrowButton/ArrowButton';
import { buttonStyle } from './PaginationStyles';

type Props = {
  totalPages: number;
};

const SLIDES_GAP = 8;
const BUTTON_WIDTH = 32;
const BUTTONS_PER_VIEW = 4;

export const Pagination: React.FC<Props> = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const swiperRef = useRef<SwiperCore | null>(null);

  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const perView = Math.min(totalPages, BUTTONS_PER_VIEW);

  const setCurrentPage = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  const pagesList = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  useEffect(() => {
    if (swiperRef.current) {
      const slideTo = Math.max(0, currentPage - 1); // 0-based index
      swiperRef.current.slideTo(slideTo);
    }
  }, [currentPage]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      height={'32px'}
    >
      <ArrowButton
        direction="left"
        isBtnDisabled={prevDisabled}
        handleClickArrow={() => setCurrentPage(currentPage - 1)}
      />

      <Box width={perView * BUTTON_WIDTH + (perView - 1) * SLIDES_GAP}>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          slidesPerView={perView}
          spaceBetween={SLIDES_GAP}
        >
          {pagesList.map(page => (
            <SwiperSlide key={page}>
              <Button
                onClick={() => setCurrentPage(page)}
                variant={page === currentPage ? 'contained' : 'outlined'}
                sx={buttonStyle}
              >
                {page}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <ArrowButton
        direction="right"
        isBtnDisabled={nextDisabled}
        handleClickArrow={() => setCurrentPage(currentPage + 1)}
      />
    </Box>
  );
};
