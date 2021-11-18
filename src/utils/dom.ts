// 获取元素大小以及相对窗口的位置
export const getBoundingClientRect = (ele) => {
    const rect = ele.getBoundingClientRect();

    // 解决ie下的兼容问题
    const isIE = navigator.userAgent.indexOf('MSIE') !== -1;
    const rectTop = isIE && ele.tagName === 'HTML' ? -ele.scrollTop : rect.top;

    return {
        left: rect.left,
        top: rectTop,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.right - rect.left,
        height: rect.bottom - rectTop,
    };
};
