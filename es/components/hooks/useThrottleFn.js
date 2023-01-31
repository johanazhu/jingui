import throttle from 'lodash/throttle';
import { useMemo } from 'react';
import useLatest from "./use-latest";
import useUnmount from "./use-unmount";
function useThrottleFn(fn, options) {
  var _options$wait;
  var fnRef = useLatest(fn);
  var wait = (_options$wait = options === null || options === void 0 ? void 0 : options.wait) !== null && _options$wait !== void 0 ? _options$wait : 1000;
  var throttled = useMemo(function () {
    return throttle(function () {
      // @ts-ignore
      return fnRef.current.apply(fnRef, arguments);
    }, wait, options);
  }, []);
  useUnmount(function () {
    throttled.cancel();
  });
  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush
  };
}
export default useThrottleFn;