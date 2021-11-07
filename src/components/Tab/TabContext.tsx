import React, { forwardRef, useRef, memo } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { TabContentProps } from './PropType';

const TabContent = forwardRef((props: TabContentProps, ref: any) => {
    const { list, duration, children, onClick, changeSwiper, onSwiper } = props;

    return <div className="jing-tab__content" ref={ref}></div>;
});

export default memo(TabContent);
