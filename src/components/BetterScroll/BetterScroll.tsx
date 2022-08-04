import React, {
    useState,
    useEffect,
    useRef,
    useLayoutEffect,
    useMemo,
    forwardRef,
    useImperativeHandle,
} from 'react';
import BScroll from '@better-scroll/core';
import { ScrollProps } from './PropType';
import IconPullupImg from '@/assets/icon-pullup.png';
import IconLoadingImg from '@/assets/icon-loading.png';

import { debounce } from '@/utils';

const TIME_BOUNCE = 800;
const TIME_STOP = 600;
const prefixCls = 'jing-button';

const BetterScroll = forwardRef((props: ScrollProps, ref) => {
    const {
        pullUpLoading,
        pullUpCb,
        pullingUpStatus,
        onScroll,
        bottom,
        top,
        children,
        bounceTop,
        bounceBottom,
    } = props;

    const scrollContainerRef = useRef<any>(null);
    const pullupRef = useRef<any>(null);
    const isPullingUpToggle = useRef<any>(null);
    // const offsetHeight = scrollContainerRef.current?.offsetHeight;
    // console.log('offsetHeight', offsetHeight);

    const [bScroll, setbScroll] = useState<any>(null);
    const [isShowPullingUp, setIsShowPullingUp] = useState(false); // 是否显示上拉
    const [thePullingUpStatus, setThePullingUpStatus] = useState<any>(false); // 下拉数据是否展示完毕
    const [pullupText, setPullupText] = useState('上拉加载更多');
    // const scrollContainerRef = useRef<HTMLDivElement>(null);

    let pullUpCbDebounce = useMemo(() => {
        if (!pullUpCb) return;
        return debounce(pullUpCb, 500);
    }, [pullUpCb]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const bs = new BScroll(scrollContainerRef.current, {
                scrollY: true,
                // 得知滚动的位置
                probeType: 3,
                // 设置回弹动画的动画时长
                bounceTime: TIME_BOUNCE,
                click: true,
                // https://github.com/ustbhuangyi/better-scroll/issues/580
                // 是否开启：防止iphone微信滑动卡顿
                // useTransition: false,
                bounce: {
                    top: bounceTop,
                    bottom: bounceBottom,
                },
            });
            setbScroll(bs);
        }
        return () => {
            setbScroll(null);
        };
    }, []);

    useEffect(() => {
        setThePullingUpStatus(pullingUpStatus);
    }, [pullingUpStatus]);

    useLayoutEffect(() => {
        if (!bScroll) return;

        const scrollHandler = async (pos: { x: number; y: number }) => {
            if (scrollContainerRef.current) {
                const scrollUp =
                    scrollContainerRef.current.children[0].children[1];
                const pullup = pullupRef.current;
                // console.log('scrollContainerRef.current', scrollContainerRef.current);
                // console.log('scrollUp', scrollUp);
                if (scrollUp && pullup) {
                    // console.log('差值', Math.abs(pos.y) - Math.abs(bScroll.maxScrollY));
                    if (Math.abs(pos.y) - Math.abs(bScroll.maxScrollY) > 20) {
                        setPullupText('松开刷新');
                        // @ts-ignore
                        pullup.children[0].children[0].style.cssText = `
                            -webkit-transform: rotate(-180deg);
                            -moz-transform: rotate(-180deg);
                            -ms-transform: rotate(-180deg);
                            -o-transform: rotate(-180deg);
                            transform: rotate(-180deg);
                        `;
                    } else {
                        if (
                            isPullingUpToggle.current &&
                            isPullingUpToggle.current === true
                        ) {
                            // @ts-ignore
                            pullup.children[0].children[0].style.cssText = '';
                            setIsShowPullingUp(true);
                        } else {
                            // console.log('上拉加载更多');
                            setIsShowPullingUp(false);
                            setPullupText('上拉加载更多');
                            // @ts-ignore
                            pullup.children[0].children[0].style.cssText = `
                                -webkit-transform: rotate(0);
                                -moz-transform: rotate(0);
                                -ms-transform: rotate(0);
                                -o-transform: rotate(0);
                                transform: rotate(0);
                             `;
                        }
                    }
                }
            }
        };
        bScroll.on('scroll', scrollHandler);
        return () => {
            bScroll.off('scroll', scrollHandler);
        };
    }, [bScroll]);

    useEffect(() => {
        if (!bScroll || !pullUpCb) return;
        const handlePullUp = async () => {
            if (Math.abs(bScroll.y) >= Math.abs(bScroll.maxScrollY) + 20) {
                // console.log('touchEnd');
                isPullingUpToggle.current = true;
                if (!pullingUpStatus) {
                    // console.log('pullingUpStatus', pullingUpStatus);
                    pullUpCbDebounce && (await pullUpCbDebounce());
                    await finishPullUp();
                }
            }
        };
        bScroll.on('touchEnd', handlePullUp);
        return () => {
            bScroll.off('touchEnd', handlePullUp);
        };
    }, [bScroll, pullUpCb, pullUpCbDebounce, pullingUpStatus]);

    async function finishPullUp() {
        await new Promise((resolve) => {
            setTimeout(() => {
                setIsShowPullingUp(false);
                // @ts-ignore
                resolve();
            }, TIME_STOP);
        });
        setTimeout(() => {
            isPullingUpToggle.current = false;
            bScroll.refresh();
        }, TIME_BOUNCE);
    }

    useImperativeHandle(ref, () => ({
        refresh() {
            if (bScroll) {
                bScroll.refresh();
                bScroll.scrollTo(0, 0);
            }
        },
        getBScroll() {
            if (bScroll) {
                return bScroll;
            }
        },
    }));

    return (
        <div
            className={prefixCls}
            style={{
                bottom: `${bottom}px`,
                top: `${top}px`,
            }}
        >
            <div className={`${prefixCls}__pulldown`} ref={scrollContainerRef}>
                <div className={`${prefixCls}__pulldown--scroller`}>
                    {children}
                    {pullUpLoading && (
                        <div className={`${prefixCls}__pullup`} ref={pullupRef}>
                            {thePullingUpStatus ? (
                                <div className={`${prefixCls}__pullup--after`}>
                                    <span> 没有更多了 </span>
                                </div>
                            ) : isShowPullingUp ? (
                                <div
                                    className={`${prefixCls}__pullup--loading`}
                                >
                                    <img src={IconLoadingImg} />
                                    <span> 加载中... </span>
                                </div>
                            ) : (
                                <div className={`${prefixCls}__pullup--before`}>
                                    <img src={IconPullupImg} />
                                    <span>{pullupText}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

BetterScroll.defaultProps = {
    pullUpLoading: false,
    bounceTop: true,
    bounceBottom: true,
};

export default BetterScroll;
