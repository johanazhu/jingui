// 获取元素大小以及相对窗口的位置
export var getBoundingClientRect = function getBoundingClientRect(ele) {
  var rect = ele.getBoundingClientRect();

  // 解决ie下的兼容问题
  var isIE = navigator.userAgent.indexOf('MSIE') !== -1;
  var rectTop = isIE && ele.tagName === 'HTML' ? -ele.scrollTop : rect.top;
  return {
    left: rect.left,
    top: rectTop,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.right - rect.left,
    height: rect.bottom - rectTop
  };
};