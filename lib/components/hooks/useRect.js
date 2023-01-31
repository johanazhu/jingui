"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRect = exports.default = void 0;
function isWindow(val) {
  return val === window;
}
var useRect = function useRect(elementRef) {
  var element = elementRef;
  if (isWindow(element)) {
    var width = element.innerWidth;
    var height = element.innerHeight;
    return {
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width: width,
      height: height
    };
  }
  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
};
exports.getRect = useRect;
var _default = useRect;
exports.default = _default;