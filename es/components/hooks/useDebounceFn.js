import debounce from 'lodash/debounce';
import { useMemo } from 'react';
import useLatest from "./use-latest";
import useUnmount from "./use-unmount";
function useDebounceFn(fn, options) {
  var _options$wait;
  var fnRef = useLatest(fn);
  var wait = (_options$wait = options === null || options === void 0 ? void 0 : options.wait) !== null && _options$wait !== void 0 ? _options$wait : 1000;
  var debounced = useMemo(function () {
    return debounce(function () {
      // @ts-ignore
      return fnRef.current.apply(fnRef, arguments);
    }, wait, options);
  }, []);
  useUnmount(function () {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
export default useDebounceFn;