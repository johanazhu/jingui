// import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import BScroll from '@better-scroll/core';
// import PullDown from '@better-scroll/pull-down';
// import Pullup from '@better-scroll/pull-up';
// import IconPullupImg from '@/assets/images/icon-pullup.png';

// import util from '../_util';

// BScroll.use(PullDown);
// BScroll.use(Pullup);

// export interface BetterScrollProps {
//     showPullDownLoading?: boolean; // 是否显示 下拉刷新loading
//     pullingUpStatus: boolean; // 数据是否展示完毕
//     pullDownCb: () => void; // 下拉刷新回调
//     pullUpCb: () => void; // 上拉加载回调
//     onScroll: () => void; // 滚动时触发的回调
//     children: any;
// }

// const TIME_BOUNCE = 800;
// const TIME_STOP = 600;
// const THRESHOLD = 70;
// const STOP = 70;

// const BetterScroll = (props: BetterScrollProps) => {
//     const {
//         pullDownCb,
//         pullUpCb,
//         pullingUpStatus,
//         showPullDownLoading,
//         onScroll,
//         children,
//     } = props;
//     const [bScroll, setbScroll] = useState<any>(null);
//     const [beforePullDown, setBeforePullDown] = useState(true);
//     const [isPullingDown, setIsPullingDown] = useState(false);
//     const [isShowPullingUp, setIsShowPullingUp] = useState(false); // 是否显示上拉
//     const [thePullingUpStatus, setThePullingUpStatus] = useState(false); // 下拉数据是否展示完毕
//     const [pullupText, setPullupText] = useState('上拉加载更多');
//     const scrollContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (scrollContainerRef.current) {
//             const bs = new BScroll(scrollContainerRef.current, {
//                 scrollY: true,
//                 // 得知滚动的位置
//                 probeType: 3,
//                 // 设置回弹动画的动画时长
//                 bounceTime: TIME_BOUNCE,
//                 // 下拉刷新
//                 pullDownRefresh: {
//                     threshold: THRESHOLD,
//                     stop: STOP,
//                 },
//                 // 上拉加载
//                 pullUpLoad: {
//                     threshold: 500,
//                 },
//                 // https://github.com/ustbhuangyi/better-scroll/issues/580
//                 // 是否开启：防止iphone微信滑动卡顿
//                 // useTransition: false,
//             });
//             setbScroll(bs);
//         }
//         return () => {
//             setbScroll(null);
//         };
//     }, []);

//     useEffect(() => {
//         setThePullingUpStatus(pullingUpStatus);
//     }, [pullingUpStatus]);
//     // 滚动
//     useLayoutEffect(() => {
//         if (!bScroll || !onScroll) return;

//         const scrollHandler = (pos: { x: number; y: number }) => {
//             // console.log('pos', pos);
//             // console.log('bScroll', bScroll)
//             if (scrollContainerRef.current) {
//                 const scrollDown = scrollContainerRef.current.children[0].children[0];
//                 const scrollUp = scrollContainerRef.current.children[0].children[2];
//                 // console.log('scrollUp', scrollUp);
//                 if (scrollDown) {
//                     if (pos.y < THRESHOLD) {
//                         const y = THRESHOLD - pos.y;
//                         // console.log('改变css', y, isPullingDown);
//                         if (isPullingDown) {
//                             // @ts-ignore
//                             scrollDown.children[0].children[0].style.cssText = `
//                                 -webkit-transform: translate3d(0,${y}px,0);
//                                 -moz-transform: translate3d(0,${y}px,0);
//                                 -ms-transform: translate3d(0,${y}px,0);
//                                 -o-transform: translate3d(0,${y}px,0);
//                                 transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
//                                 `;
//                         }
//                     } else if (pos.y > THRESHOLD) {
//                         console.log('显示动态loading');
//                         setBeforePullDown(false);
//                         setIsPullingDown(true);
//                         // util.removeClass(scrollDown, 'pulldown-before');
//                         // util.addClass(scrollDown, 'pulldown-loading');
//                     } else {
//                         console.log('拉取数据中');
//                         // setIsPullingDown(false);
//                         // util.removeClass(scrollDown, 'pulldown-before');
//                         // util.removeClass(scrollDown, 'pulldown-loading');
//                     }
//                 }
//                 if (scrollUp) {
//                     // console.log('差值', Math.abs(pos.y) - Math.abs(bScroll.maxScrollY));
//                     if (Math.abs(pos.y) - Math.abs(bScroll.maxScrollY) > 50) {
//                         setPullupText('松开刷新');
//                         // @ts-ignore
//                         scrollUp.children[0].children[0].style.cssText = `
//                             // -webkit-transform: rotate(-180deg);
//                             // -moz-transform: rotate(-180deg);
//                             // -ms-transform: rotate(-180deg);
//                             // -o-transform: rotate(-180deg);
//                             transform: rotate(-180deg);
//                         `;
//                         if (Math.abs(pos.y) - Math.abs(bScroll.maxScrollY) > 90) {
//                             // @ts-ignore
//                             scrollUp.children[0].children[0].style.cssText = '';
//                             setIsShowPullingUp(true);
//                             console.log('高度');
//                             // pullUpRequest();
//                         }
//                     } else {
//                         setPullupText('上拉加载更多');
//                         // @ts-ignore
//                         scrollUp.children[0].children[0].style.cssText = `
//                             -webkit-transform: rotate(0);
//                             -moz-transform: rotate(0);
//                             -ms-transform: rotate(0);
//                             -o-transform: rotate(0);
//                             transform: rotate(0);
//                          `;
//                     }
//                 }
//             }
//         };
//         bScroll.on('scroll', scrollHandler);
//         return () => {
//             bScroll.off('scroll', scrollHandler);
//         };
//     }, [bScroll, onScroll]);

//     useEffect(() => {
//         if (!bScroll || !pullUpCb) return;
//         bScroll.on('touchEnd', async () => {
//             console.log('bScroll.maxScrollY', bScroll.maxScrollY);
//             console.log('bScroll.y', bScroll.y);
//             // console.log('手指放开');
//             // 判断是否滑动到了底部
//             if (Math.abs(bScroll.y) >= Math.abs(bScroll.maxScrollY) + 90) {
//                 console.log('request前面');
//                 pullUpCb && (await pullUpCb());
//                 console.log('request后面');
//                 // 回归原处
//                 finishPullUp();
//             }
//         });
//         return () => {
//             bScroll.off('scrollEnd');
//         };
//     }, [pullUpCb, bScroll]);

//     useEffect(() => {
//         if (!bScroll) return;
//         const pullingDownHandler = async () => {
//             if (scrollContainerRef.current) {
//                 const scrollDown = scrollContainerRef.current.children[0].children[0];
//                 util.addClass(scrollDown.children[0], 'pulldown-loading-now');
//                 // 请求接口 返回promise props.pullDownCb()
//                 pullDownCb && (await pullDownCb());
//                 console.log('111');
//                 setIsPullingDown(false);
//                 finishPullDown();
//                 util.removeClass(scrollDown.children[0], 'pulldown-loading-now');
//             }
//         };
//         bScroll.on('pullingDown', pullingDownHandler);
//         return () => {
//             bScroll.off('pullingDown', pullingDownHandler);
//         };
//     }, [bScroll]);

//     async function finishPullDown() {
//         const stopTime = TIME_STOP;
//         await new Promise((resolve) => {
//             setTimeout(() => {
//                 bScroll.finishPullDown();
//                 resolve();
//             }, stopTime);
//         });
//         setTimeout(() => {
//             setBeforePullDown(true);
//             bScroll.refresh();
//         }, TIME_BOUNCE);
//     }

//     async function finishPullUp() {
//         const stopTime = TIME_STOP;
//         await new Promise((resolve) => {
//             setTimeout(() => {
//                 bScroll.finishPullUp();
//                 resolve();
//             }, stopTime);
//         });
//         setTimeout(() => {
//             setIsShowPullingUp(false);
//             bScroll.refresh();
//         }, TIME_BOUNCE);
//     }

//     return (
//         <div className="pulldown-bswrapper" ref={scrollContainerRef}>
//             <div className="pulldown-scroller">
//                 <div className="pulldown-wrapper">
//                     {beforePullDown ? (
//                         <div className="pulldown-before">
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                         </div>
//                     ) : isPullingDown ? (
//                         <div className="pulldown-loading">
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                         </div>
//                     ) : (
//                         <div className="pulldown-loading-success">
//                             <span>刷新成功</span>
//                         </div>
//                     )}
//                 </div>
//                 {children}
//                 <div className="pullup-wrapper">
//                     {thePullingUpStatus ? (
//                         <div className="pullup-after">
//                             <span> 没有更多了 </span>
//                         </div>
//                     ) : isShowPullingUp ? (
//                         <div className="pullup-loading">
//                             {/* <img src={IconPullupImg} /> */}
//                             <span> 加载中... </span>
//                         </div>
//                     ) : (
//                         <div className="pullup-before">
//                             <img src={IconPullupImg} />
//                             <span>{pullupText}</span>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BetterScroll;