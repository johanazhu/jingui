"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelRaf = cancelRaf;
exports.doubleRaf = doubleRaf;
exports.inBrowser = void 0;
exports.raf = raf;
exports.rafPolyfill = rafPolyfill;
var inBrowser = typeof window !== 'undefined';

// @ts-ignore
exports.inBrowser = inBrowser;
var root = inBrowser ? window : global;
var prev = Date.now();

// 补间动画polyfill
function rafPolyfill(fun) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fun, ms);
  prev = curr + ms;
  return id;
}
function raf(fun) {
  var requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
  return requestAnimationFrame.call(root, fun);
}
function cancelRaf(id) {
  var cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout;
  cancelAnimationFrame.call(root, id);
}

// double raf for animation
function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}