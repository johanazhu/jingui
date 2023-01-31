import { useEffect } from 'react';
import useLatest from "./use-latest";
var useUnmount = function useUnmount(fn) {
  var fnRef = useLatest(fn);
  useEffect(function () {
    return function () {
      fnRef.current();
    };
  }, []);
};
export default useUnmount;