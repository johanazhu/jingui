"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.preventDefault = preventDefault;
exports.stopPropagation = stopPropagation;
exports.supportsPassive = void 0;
var supportsPassive = false;
exports.supportsPassive = supportsPassive;
try {
  var opts = {};
  Object.defineProperty(opts, 'passive', {
    get: function get() {
      exports.supportsPassive = supportsPassive = true;
    }
  });
  window.addEventListener('test-passive', null, opts);
} catch (e) {}
function on(target, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  target.addEventListener(event, handler, supportsPassive ? {
    capture: false,
    passive: passive
  } : false);
}
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}