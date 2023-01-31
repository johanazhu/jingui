"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollLeftTo = scrollLeftTo;
var _utils = require("../../utils");
var rafId;
function scrollLeftTo(scroller, to, duration) {
  (0, _utils.cancelRaf)(rafId);
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    if (++count < frames) {
      rafId = (0, _utils.raf)(animate);
    }
  }
  animate();
}