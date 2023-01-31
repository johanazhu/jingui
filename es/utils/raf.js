export var inBrowser = typeof window !== 'undefined';

// @ts-ignore
var root = inBrowser ? window : global;
var prev = Date.now();

// 补间动画polyfill
export function rafPolyfill(fun) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fun, ms);
  prev = curr + ms;
  return id;
}
export function raf(fun) {
  var requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
  return requestAnimationFrame.call(root, fun);
}
export function cancelRaf(id) {
  var cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout;
  cancelAnimationFrame.call(root, id);
}

// double raf for animation
export function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}