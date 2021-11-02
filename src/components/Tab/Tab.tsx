import React, {
    useState,
    useEffect,
    useRef,
    forwardRef,
    CSSProperties,
} from 'react';
import classnames from 'classnames';
import Result from '../Result';
import { isEmptyArray } from '../utils';

import TabItem, { TabItemProps } from './TabItem';
import TabContent from './TabContext';
import { scrollLeftTo } from './utils';
// import ProductCard from '../../pages/mall/components/ProductCard';

function filterItem(swiper: any, data: any) {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.value === swiper.value) {
            return i;
        }
    }
}

/**
 * Tab 和业务组件耦合，暂时没有好的解决方法
 * @param
 **/
export interface TabProps {
    className?: string;
    style?: React.CSSProperties;
    sticky?: boolean;
    selected: TabItemProps | null; // active 选择的Tab 选中的那个Tab
    data: TabItemProps | any;
    onChange: (res: TabItemProps) => void;
    onClick: (item: any) => void;
    swipeThreshold?: number;
    duration?: number; // 间隔
    children?: React.ReactNode;
}

function useTabList(initialValue: TabItemProps) {
    const [list, setList] = useState(initialValue);
    const updateList = (res: TabItemProps) => {
        setList(res);
    };
    return { list, updateList };
}

function useTabData(initialValue: TabItemProps | null) {
    const [data, setData] = useState(initialValue);

    const onSelected = (res: TabItemProps, fn: (res: TabItemProps) => void) => {
        setData(res);
        fn(res);
    };

    const updateData = (res: TabItemProps | null) => {
        setData(res);
    };

    return { data, onSelected, updateData };
}

const Tab = forwardRef((props: TabProps, ref: any) => {
    const {
        style,
        data,
        sticky,
        selected,
        className,
        onChange,
        swipeThreshold,
        duration,
        onClick,
        children,
    } = props;

    console.log('selected', selected);

    const tabsItemRef = useRef([]);
    const navRef = useRef<any>(null);
    // const secondNavRef = useRef<any>(null);

    // @ts-ignore
    const oList = useTabList(data.slice(0));
    const oData = useTabData(selected);
    const [lineStyle, setLineStyle] = useState<CSSProperties>();
    const [currentIndex, setCurrentIndex] = useState(
        data.findIndex(
            (item: any) => selected && item.tagId === selected?.tagId,
        ) || 0,
    );
    const [currentSecondIndex, setCurrentSecondIndex] = useState(0);
    const [tabSwiper, setTabSwiper] = useState(null);

    // @ts-ignore
    const scrollable = oList.list.length >= swipeThreshold;

    useEffect(() => {
        window.addEventListener('scroll', bindHandleScroll);
        return () => {
            window.removeEventListener('scroll', bindHandleScroll);
        };
    }, []);

    useEffect(() => {
        oList.updateList(data);
    }, [data]);

    useEffect(() => {
        // @ts-ignore
        tabsItemRef.current = tabsItemRef.current.slice(0, oList.list.length);

        const { offsetLeft, offsetWidth } = tabsItemRef.current[currentIndex];
        const navDom = navRef.current;
        const left = offsetLeft + offsetWidth / 2;

        const to = offsetLeft - (navDom.offsetWidth - offsetWidth) / 2;
        // @ts-ignore
        scrollLeftTo(navDom, to, duration);

        const lineStyle: CSSProperties = {
            // width: ,
            transform: `translateX(${left}px) translateX(-50%)`,
            transitionDuration: `${duration}s`,
        };
        setLineStyle(lineStyle);

        oData.updateData(selected);
    }, [selected]);

    const cls = classnames(
        'jing-tab__wrap',
        {
            'jing-tab__sticky': sticky,
            'jing-tab__scrollable': scrollable,
        },
        className,
    );

    const bindHandleScroll = (event: any) => {
        const navRefTop = navRef.current.getBoundingClientRect().top;

        const scrollTop =
            (event.srcElement
                ? event.srcElement.documentElement.scrollTop
                : false) ||
            window.pageYOffset ||
            (event.srcElement ? event.srcElement.body.scrollTop : 0);

        // let percent = Math.abs(scrollTop / navRefTop);
        // console.log('percent', percent)
        const navDom = navRef.current;

        if (navRefTop < scrollTop) {
            navDom.style.backgroundColor = '#fff';
        } else {
            navDom.style.backgroundColor = '';
        }
    };

    const onHandleClickItem = (index: number) => {
        // 先重置 currentSecondIndex
        setCurrentSecondIndex(0);

        setCurrentIndex(index);
        // @ts-ignore
        tabSwiper.slideTo(index);
    };

    const onHandleChangeSwiper = (swiper: any) => {
        const index = filterItem(swiper, oList.list);
        // @ts-ignore
        setCurrentIndex(index);
    };

    const onHandleClickToSecondNav = (index: number) => {
        setCurrentSecondIndex(index);
    };

    return (
        <div className="jing-tab" style={style} ref={ref}>
            <div className={cls}>
                <div className="jing-tab__nav" ref={navRef}>
                    {/* @ts-ignore */}
                    {oList.list.map((item: TabItemProps, index: number) => (
                        <TabItem
                            /* @ts-ignore */
                            ref={(el) => (tabsItemRef.current[index] = el)}
                            key={item.value}
                            value={item.value}
                            label={item.label}
                            disabled={item.disabled}
                            selected={oData.data}
                            icon={item.icon}
                            isActive={index === currentIndex}
                            onClick={() => {
                                onHandleClickItem(index);
                                oData.onSelected(item, onChange);
                            }}
                        />
                    ))}
                    <div className="jing-tab__line" style={lineStyle} />
                </div>
            </div>
            <TabContent
                list={oList.list}
                duration={duration}
                changeSwiper={(swiper) => {
                    onHandleChangeSwiper(swiper);
                    oData.onSelected(swiper, onChange);
                }}
                onSwiper={setTabSwiper}
            >
                {
                    // @ts-ignore
                    oData?.data?.labelList.length > 1 && (
                        <div className="jing-tab__secondnav">
                            {
                                // @ts-ignore
                                oData?.data?.labelList.map(
                                    (item: any, index: number) => {
                                        return (
                                            <div
                                                className={classnames(
                                                    'jing-tab__secondnav-box',
                                                    {
                                                        'jing-tab__secondnav-box-active':
                                                            index ===
                                                            currentSecondIndex,
                                                    },
                                                )}
                                                key={item.tagId}
                                                onClick={() => {
                                                    onHandleClickToSecondNav(
                                                        index,
                                                    );
                                                }}
                                            >
                                                {item.tagName}
                                            </div>
                                        );
                                    },
                                )
                            }
                        </div>
                    )
                }
                {
                    // @ts-ignore
                    oData?.data?.labelList?.[currentSecondIndex]?.productList &&
                    // @ts-ignore
                    !isEmptyArray(
                        oData?.data?.labelList?.[currentSecondIndex]
                            ?.productList,
                    ) ? (
                        <>
                            {
                                // @ts-ignore
                                oData?.data?.labelList?.[
                                    currentSecondIndex
                                ].productList.map((item: any) => (
                                    <div>展示数据，后期更改</div>
                                    // <ProductCard
                                    //     onClick={() => {
                                    //         onClick(item);
                                    //     }}
                                    //     key={item.productId}
                                    //     productName={item.productName}
                                    //     introduction={item.introduction}
                                    //     insuranceUrl={item.insuranceUrl}
                                    //     productIcon={item.productIcon}
                                    //     tagList={item.labelList}
                                    //     price={item.minPremium}
                                    // />
                                ))
                            }
                        </>
                    ) : (
                        <Result status="empty" title="暂无数据" />
                    )
                }
            </TabContent>
        </div>
    );
});

Tab.defaultProps = {
    sticky: false,
    swipeThreshold: 5,
    duration: 0.3,
};

export default Tab;
