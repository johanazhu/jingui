import React, {
    useState,
    useEffect,
    useRef,
    CSSProperties,
    ReactNode,
    FC,
    memo,
} from 'react';
import classnames from 'classnames';
import Sticky from '../Sticky';
import { Swiper, SwiperSlide } from '../Swiper';
import Title from './TabsTitle';
import TabPanel from './TabPanel';

import { TabsType } from './PropType';
import { scrollLeftTo } from './utils';

const prefixCls = 'jing-tabs';

const Tabs: TabsType = (props) => {
    const {
        className,
        style,
        value,
        type,
        swipeable,
        sticky,
        ellipsis,
        duration,
        disabled,
        swipeThreshold,
        children,
        onChange,
        onSwiper,
    } = props;

    const tabsNavRef = useRef<any>(null);
    const tabsTitleRef = useRef<any>([]);

    const [currentIndex, setCurrentIndex] = useState(value);
    const [lineStyle, setLineStyle] = useState<CSSProperties>();
    const [tabSwiper, setTabSwiper] = useState(null);

    const count = React.Children.count(children);

    let scrollable: boolean = false;

    if (swipeThreshold) {
        scrollable = count > swipeThreshold || !ellipsis;
    }

    useEffect(() => {
        const { offsetLeft, offsetWidth } = tabsTitleRef.current[currentIndex];

        const navDom = tabsNavRef.current;

        const left = offsetLeft + offsetWidth / 2;

        const to = offsetLeft - (navDom.offsetWidth - offsetWidth) / 2;

        duration && scrollLeftTo(navDom, to, duration);

        const lineStyle: CSSProperties = {
            transform: `translateX(${left}px) translateX(-50%)`,
            transitionDuration: `${duration}s`,
        };

        setLineStyle(lineStyle);
    }, [currentIndex]);

    const classes = classnames(prefixCls, className, `${prefixCls}--${type}`);

    const onHandleClick = (item: any, index: number) => {
        if (disabled || item.props.disabled) {
            return;
        }

        if (swipeable) {
            // @ts-ignore
            tabSwiper && tabSwiper.slideTo(index);
        }
        setCurrentIndex(index);
        onChange && onChange(index);
    };

    const onHandleSwiper = (swiper: any, index: number) => {
        setCurrentIndex(index);
        setTabSwiper(swiper);
        onSwiper && onSwiper(index);
    };

    // ????????????
    let contentRender;

    if (swipeable) {
        contentRender = (
            <Swiper
                onInit={(swiper: any) => {
                    setTabSwiper(swiper);
                    swiper.slideTo(currentIndex);
                }}
                onSlideChangeTransitionEnd={(swiper) => {
                    if (swipeable) {
                        onHandleSwiper(swiper, swiper.realIndex);
                    }
                }}
            >
                {React.Children.map(children, (item: any, index: number) => (
                    <SwiperSlide key={+index}>
                        {item.props.children}
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    } else {
        contentRender = React.Children.map(
            children,
            (item: any, index: number) => {
                return (
                    item.props.children && (
                        <TabPanel
                            {...item.props}
                            key={+index}
                            selected={Number(currentIndex) === index}
                        />
                    )
                );
            },
        );
    }

    const Nav = React.Children.map(children, (item: any, index: number) => {
        const { title, img } = item.props;

        return (
            <Title
                ref={(el) => (tabsTitleRef.current[index] = el)}
                active={currentIndex === index}
                value={title}
                img={img}
                key={+index}
                scrollable={scrollable}
                disabled={disabled || item.props.disabled}
                onClick={() => {
                    onHandleClick(item, index);
                }}
            />
        );
    });

    const Wrap = (
        <div
            className={classnames(
                `${prefixCls}__wrap`,
                `${prefixCls}__wrap--${type}`,
                {
                    [`${prefixCls}__wrap--scrollable`]: !!scrollable,
                },
            )}
        >
            <div className={classnames(`${prefixCls}__nav`)} ref={tabsNavRef}>
                {Nav}
                <div
                    className={classnames(`${prefixCls}__line`)}
                    style={lineStyle}
                />
            </div>
        </div>
    );

    return (
        <div className={classes} style={style}>
            {sticky ? <Sticky> {Wrap} </Sticky> : Wrap}
            <div className={classnames(`${prefixCls}__content`)}>
                {contentRender}
            </div>
        </div>
    );
};

Tabs.Panel = TabPanel;

Tabs.defaultProps = {
    type: 'line',
    ellipsis: true,
    swipeThreshold: 5,
    duration: 0.3,
};

export default Tabs;
