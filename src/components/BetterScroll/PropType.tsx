/**
 * BetterScroll 滚动
 * @param {pullUpLoading} boolean                           // 是否显示上拉刷新
 * @param {showPullDownLoading} boolean                     // 是否显示 下拉刷新loading
 * @param {pullingUpStatus} string                          // 数据是否展示完毕
 * @param {bottom} number                                   // 滚动组件距离底部的距离
 * @param {top} number                                      // 滚动组件距离顶部的距离
 * @param {children} React.ReactNode                        // 组件中的内容
 * @param {bounceTop} boolean                               // betterscroll默认属性配置
 * @param {bounceBottom} boolean                            // betterscroll默认属性配置
 * @param {pullDownCb} function                             // 下拉刷新回调
 * @param {pullUpCb} function                               // 上拉加载回调
 * @param {onScroll} function                               // 滚动时触发的回调
 **/
export interface BetterScrollProps {
    pullUpLoading?: boolean;
    showPullDownLoading?: boolean;
    pullingUpStatus?: boolean;
    bottom?: number;
    top?: number;
    children: React.ReactNode;
    bounceTop?: boolean;
    bounceBottom?: boolean;
    pullDownCb?: () => void;
    pullUpCb?: () => void;
    onScroll?: () => void;
}
