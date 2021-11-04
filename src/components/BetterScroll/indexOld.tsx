import React, {
    useState,
    useEffect,
    useMemo,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react';
import BetterScroll from 'better-scroll';

import util from '../_util';

/**
 * Scroll 组件，基于 BetterScroll
 * @param {direction}  滚动方向
 * @param {refresh} boolean 重刷新
 * @param {click} boolean 支持 click 事件
 * @param {onScroll} function 启动滚动
 * @param {pullUp} function 上拉动作函数
 * @param {pullDown} function 下拉动作函数
 * @param {showPullUpLoading} boolean 是否出现上拉动作时出现的loading
 * @param {showPullDownLoading} boolean 是否出现下拉动作时出现的loading
 * @param {bounceTop} boolean 是否支持向上吸顶
 * @param {bounceBottom} boolean 是否支持向下吸顶
 **/

export interface ScrollProps {
    direction?: 'vertical' | 'horizental';
    refresh?: boolean;
    click?: boolean;
    onScroll?: Function;
    pullUp?: Function;
    pullDown?: Function;
    showPullUpLoading?: boolean;
    showPullDownLoading?: boolean;
    bounceTop?: boolean;
    bounceBottom?: boolean;
    children?: any;
}

const pullDownSensitive = 70;
const pullUpSensitive = 20;
const bounceTime = 600;

const Scroll = forwardRef((props: ScrollProps, ref) => {
    const {
        direction,
        refresh,
        click,
        onScroll,
        pullUp,
        pullDown,
        bounceTop,
        bounceBottom,
        children,
        showPullUpLoading,
        showPullDownLoading,
    } = props;

    const [bScroll, setBScroll] = useState<any>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    let pullUpDebounce = useMemo(() => {
        if (pullUp) return util.debounce(pullUp, 500);
    }, [pullUp]);

    let pullDownDebounce = useMemo(() => {
        if (pullDown) return util.debounce(pullDown, 500);
    }, [pullDown]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const scroll = new BetterScroll(scrollContainerRef.current, {
                scrollX: direction === 'horizental',
                scrollY: direction === 'vertical',
                probeType: 3,
                click: click,
                bounce: {
                    top: bounceTop,
                    bottom: bounceBottom,
                },
            });
            setBScroll(scroll);
        }
        return () => {
            setBScroll(null);
        };
    }, []);

    useEffect(() => {
        if (!bScroll || !onScroll) return;
        bScroll.on('scroll', onScroll);
        return () => {
            bScroll.off('scroll', onScroll);
        };
    }, [onScroll, bScroll]);

    useEffect(() => {
        if (!bScroll || !pullUp) return;
        const handlePullUp = () => {
            // 判断是否滑动到底部
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                if (pullUpDebounce) pullUpDebounce();
            }
        };
        bScroll.on('scrollEnd', handlePullUp);
        return () => {
            bScroll.off('scrollEnd', handlePullUp);
        };
    }, [pullUp, pullUpDebounce, bScroll]);

    useEffect(() => {
        if (!bScroll || !pullDown) return;
        const handlePullDown = (pos: any) => {
            if (pullDownDebounce) pullDownDebounce();
            // 判断下拉动作
            // console.log('下拉动作')
            // if (scrollContainerRef.current) {
            //     const scrollDown = scrollContainerRef.current.children[0];
            //     console.log('scrollDown', scrollDown.children[0])
            //     if (pos.y < pullDownSensitive) {
            //         const y = pullDownSensitive - pos.y;
            //         console.log('y', y);
            //         // console.log('scrollDown.children[0]', scrollDown.children[0].children[0])
            //         // @ts-ignore
            //         // scrollDown.children[0].children[0].style.cssText =
            //         //     `-webkit-transform: translate3d(0,${y}px,0);
            //         //           -moz-transform: translate3d(0,${y}px,0);
            //         //           transform: translate3d(0,${y}px,0)`
            //     } else if (pos.y > pullDownSensitive) {
            //         if (pullDownDebounce) pullDownDebounce();
            //         console.log('pos', pos)
            //         console.log('bScroll.maxScrollY', bScroll)
            //     }
            // }
            // if (pullDownDebounce) pullDownDebounce();

            // Scroll_pulldown_turn_on

            // logoDrowdown() {
            //     const scrollDown = this.iscroll.getIScroll().scroller.children[0];
            //     const downHasClass = util.hasClass(scrollDown, 'Scroll__pullDown_turn_on');
            //     if (this.scrolly > 1) {
            //       if (this.scrolly < pullDownSensitive) {
            //         const y = pullDownSensitive - this.scrolly;
            //         scrollDown.children[0].style.cssText =
            //         `-webkit-transform: translate3d(0,${y}px,0);
            //          -moz-transform: translate3d(0,${y}px,0);
            //          transform: translate3d(0,${y}px,0)
            //          `;
            //       }
            //       if (this.scrolly > pullDownSensitive) {
            //         if (!downHasClass) {
            //           util.addClass(scrollDown, 'Scroll__pullDown_turn_on');
            //         }
            //       } else if (downHasClass) {
            //         util.removeClass(scrollDown, 'Scroll__pullDown_turn_on');
            //       }
            //     }
            //   }
            // if (
            //     this.iscroll.getIScroll().y > pullDownSensitive &&
            //     util.hasClass(scrollDown, 'Scroll__pullDown_show_on')
            // ) {
            //     this.iscroll.getIScroll().disable();
            //     util.addClass(scrollDown, 'Scroll__pullDown_state_loading');
            //     this.iscroll.getIScroll().scrollTo(0, pullDownSensitive, bounceTime);
            //     if (scrollPullDown) {
            //         scrollPullDown(this.pullDownComplete.bind(this));
            //     }
            // }
        };
        bScroll.on('touchEnd', handlePullDown);
        return () => {
            bScroll.off('touchEnd', handlePullDown);
        };
    }, [pullDown, pullDownDebounce, bScroll]);

    useEffect(() => {
        console.log('每一次都执行');
        if (refresh && bScroll) {
            bScroll.refresh();
        }
    });

    useEffect(() => {
        // scroll
        if (!bScroll) return;
        const handleScroll = (pos: any) => {
            console.log('pos', pos);
            if (scrollContainerRef.current) {
                const scrollDown =
                    scrollContainerRef.current.children[0].children[0];
                console.log('scrollDown', scrollDown.children[0].children[0]);
                if (pos.y < pullDownSensitive) {
                    const y = pullDownSensitive - pos.y;
                    console.log('y', y);
                    // @ts-ignore
                    scrollDown.children[0].style.cssText = `-webkit-transform: translate3d(0,${y}px,0);
                              -moz-transform: translate3d(0,${y}px,0);
                              transform: translate3d(0,${y}px,0)`;
                } else if (pos.y > pullDownSensitive) {
                    util.addClass(scrollDown, 'Scroll_pulldown_turn_on');
                    console.log('pos', pos);
                    console.log('bScroll.maxScrollY', bScroll);
                }
            }
        };
        bScroll.on('scroll', handleScroll);
        return () => {
            bScroll.off('scroll', handleScroll);
        };
    }, [bScroll]);

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
        <div className="Scroll" ref={scrollContainerRef}>
            <div className="Scroll-wrapper">
                {showPullUpLoading && (
                    <div className="Scroll_pulldown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
                {children}
                <div className="Scroll_pullup">滑动到底部</div>
            </div>
        </div>
    );
});

Scroll.defaultProps = {
    direction: 'vertical',
    refresh: true,
    click: true,
    showPullUpLoading: false,
    showPullDownLoading: false,
    bounceTop: true,
    bounceBottom: true,
};

export default React.memo(Scroll);
