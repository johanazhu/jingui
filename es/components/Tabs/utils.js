import { raf, cancelRaf } from "../../utils";
var rafId;
export function scrollLeftTo(scroller, to, duration) {
  cancelRaf(rafId);
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    if (++count < frames) {
      rafId = raf(animate);
    }
  }
  animate();
}