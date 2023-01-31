"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRootScrollTop = getRootScrollTop;
exports.getScrollTop = getScrollTop;
exports.setRootScrollTop = setRootScrollTop;
exports.setScrollTop = setScrollTop;
function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
  return Math.max(top, 0);
}
function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}