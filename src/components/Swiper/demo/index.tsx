import React from 'react';
import { Swiper, SwiperSlide } from '@jojobo/jing-ui';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => (
    <>
        <DemoBlock title="基础用法">
            <Swiper>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </DemoBlock>
    </>
);
