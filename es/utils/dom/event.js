export var supportsPassive = false;
try {
  var opts = {};
  Object.defineProperty(opts, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('test-passive', null, opts);
} catch (e) {}
export function on(target, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  target.addEventListener(event, handler, supportsPassive ? {
    capture: false,
    passive: passive
  } : false);
}
export function stopPropagation(event) {
  event.stopPropagation();
}
export function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}