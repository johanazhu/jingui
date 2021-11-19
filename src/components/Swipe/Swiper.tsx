import * as React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const prefixCls = 'jing-swiper';

const Swipe = (props: any) => {
    const { onSwiper, onSlideChangeTransitionEnd, onClick } = props;

    return (
        <Swiper
            onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
            onSwiper={onSwiper}
            // speed={duration * 1000}
        >
            <SwiperSlide onClick={onClick}></SwiperSlide>
        </Swiper>
    );
};

export default Swipe;
