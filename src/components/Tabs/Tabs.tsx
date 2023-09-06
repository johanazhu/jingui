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
        stickyStyle,
        value,
        type,
        swipeable,
        sticky,
        ellipsis,
        duration,
        disabled,
        swipeThreshold,
        children,
        isChangeColor,
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
        if (tabsTitleRef && tabsTitleRef.current) {
            // console.log(' tabsTitleRef.current', tabsTitleRef.current);
            // console.log('currentIndex', tabsTitleRef.current[currentIndex]);
            const { offsetLeft = 0, offsetWidth = 0 } =
                tabsTitleRef.current[currentIndex];

            const navDom = tabsNavRef.current;

            const left = offsetLeft + offsetWidth / 2;

            const to = offsetLeft - (navDom.offsetWidth - offsetWidth) / 2;

            duration && scrollLeftTo(navDom, to, duration);

            const lineStyle: CSSProperties = {
                transform: `translateX(${left}px) translateX(-50%)`,
                transitionDuration: `${duration}s`,
            };

            setLineStyle(lineStyle);
        }
    }, [currentIndex]);

    useEffect(() => {
        isChangeColor && window.addEventListener('scroll', handleScroll);
        return () => {
            isChangeColor && window.removeEventListener('scroll', handleScroll);
        };
    }, [isChangeColor]);

    const handleScroll = (event: any) => {
        const navDom = tabsNavRef.current;

        const navRefTop = navDom.getBoundingClientRect().top;

        const scrollTop =
            (event.srcElement
                ? event.srcElement.documentElement.scrollTop
                : false) ||
            window.pageYOffset ||
            (event.srcElement ? event.srcElement.body.scrollTop : 0);

        if (navRefTop < scrollTop) {
            navDom.style.backgroundColor = '#fff';
        } else {
            navDom.style.backgroundColor = '';
        }
    };

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
        onChange && onChange(index, item.props);
    };

    const onHandleSwiper = (swiper: any, index: number) => {
        setCurrentIndex(index);
        setTabSwiper(swiper);
        onSwiper && onSwiper(index);
    };

    // 渲染内容
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
                onSwiper={onSwiper}
            >
                {React.Children.map(children, (item: any, index: number) => {
                    return (
                        item.props.children && (
                            <SwiperSlide>
                                <TabPanel
                                    {...item.props}
                                    key={+index}
                                    selected={Number(currentIndex) === index}
                                />
                            </SwiperSlide>
                        )
                    );
                })}
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
            {sticky ? <Sticky style={stickyStyle}> {Wrap} </Sticky> : Wrap}
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
