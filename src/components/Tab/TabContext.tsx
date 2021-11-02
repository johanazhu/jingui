import React, { forwardRef, useRef, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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

    return (
        <div className="jing-tab__content" ref={ref}>
            <Swiper
                onSlideChangeTransitionEnd={(swiper) => {
                    if (changeSwiper) {
                        list.filter((item: any, i: number) => {
                            if (swiper.realIndex === i) {
                                changeSwiper && changeSwiper(item);
                            }
                        });
                    }
                }}
                onSwiper={onSwiper}
                // speed={duration * 1000}
            >
                {list.map((item: any) => (
                    <SwiperSlide
                        key={item.label}
                        onClick={() => {
                            onClick && onClick(item);
                        }}
                    >
                        {children}
                        {/* <img alt="" src={item.imageUrl} /> */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
});

export default memo(TabContent);
