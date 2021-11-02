import React, { forwardRef, useRef, memo } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

interface TabContentProps {
    list: any; // 数据列表
    duration?: number; // 延迟
    children?: React.ReactNode;
    onClick?: (item: any) => void;
    changeSwiper?: (swiper: any) => void;
    onSwiper?: (swiper: any) => void; // swiper 实例
}

const TabContent = forwardRef((props: TabContentProps, ref: any) => {
    const { list, duration, children, onClick, changeSwiper, onSwiper } = props;

    return <div className="jing-tab__content" ref={ref}></div>;
});

export default memo(TabContent);
