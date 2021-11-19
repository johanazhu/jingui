import React, {
    useState,
    useEffect,
    useRef,
    CSSProperties,
    ReactNode,
    FC,
    memo,
} from 'react';
import type { MouseEvent } from 'react';
import classnames from 'classnames';
import Title from './TabsTitle';
// import Content from './TabsContent';
import TabPanel from './TabPanel';
import { TabsType } from './PropType';
import { scrollLeftTo } from './utils';

const prefixCls = 'jing-tabs';

const Tabs: TabsType = (props) => {
    const {
        className,
        style,
        value,
        swipeable,
        sticky,
        ellipsis,
        animated,
        duration,
        disabled,
        swipeThreshold,
        children,
        onChange,
    } = props;

    const tabsNavRef = useRef<any>(null);
    const tabsTitleRef = useRef<any>([]);

    const [currentIndex, setCurrentIndex] = useState(value);
    const [lineStyle, setLineStyle] = useState<CSSProperties>();

    const count = React.Children.count(children);

    let scrollable;

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

    const classes = classnames(prefixCls, className);

    const onHandleClick = (item: any, index: number) => {
        if (disabled || item.props.disabled) {
            return;
        }

        setCurrentIndex(index);
        onChange && onChange(index);
    };

    // 渲染内容
    // let contentRender;

    // if (swipeable) {
    //     contentRender = (
    //         <Carousel
    //             swipeable={!disabled}
    //             direction={direction === 'vertical' ? 'up' : 'left'}
    //             showPagination={false}
    //             activeIndex={value}
    //             ref={this.setCarouselRef}
    //             onChange={(v: number) => {
    //                 this.onTabChange(v);
    //             }}
    //         >
    //             {React.Children.map(children, (item: any, index: number) => <div key={+index}>{item.props.children}</div>)}
    //         </Carousel>
    //     );
    // } else {
    //     contentRender = React.Children.map(children, (item: ReactElement<TabPanel['props'], typeof TabPanel>, index) => {
    //         return item.props.children && <TabPanel {...item.props} selected={value === index} />;
    //     });
    // }

    const Panel = React.Children.map(children, (item: any, index: number) => {
        // console.log('itemPanel', item)
        return (
            item.props.children && (
                <TabPanel
                    {...item.props}
                    key={+index}
                    selected={currentIndex === index}
                />
            )
        );
    });

    const Nav = React.Children.map(children, (item: any, index: number) => {
        const { title, img } = item.props;

        return (
            <Title
                ref={(el) => (tabsTitleRef.current[index] = el)}
                active={currentIndex === index}
                value={title}
                img={img}
                key={+index}
                disabled={disabled || item.props.disabled}
                onClick={() => {
                    onHandleClick(item, index);
                }}
            />
        );
    });

    const Wrap = (
        <div
            className={classnames(`${prefixCls}__wrap`, {
                [`${prefixCls}__wrap--scrollable`]: !!scrollable,
            })}
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
            {sticky ? (
                <div className={classnames(`${prefixCls}__sticky`)}>{Wrap}</div>
            ) : (
                Wrap
            )}
            <div className={classnames(`${prefixCls}__content`)}>{Panel}</div>
        </div>
    );
};

Tabs.Panel = TabPanel;

Tabs.defaultProps = {
    ellipsis: true,
    swipeThreshold: 5,
    duration: 0.3,
};

export default Tabs;
