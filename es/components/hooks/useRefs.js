import { useRef, useCallback } from 'react';
export default function useRefs() {
  var refs = useRef([]);
  var setRefs = useCallback(function (index) {
    return function (el) {
      if (el) refs.current[index] = el;
    };
  }, []);
  var reset = useCallback(function () {
    refs.current = [];
  }, []);
  return [refs.current, setRefs, reset];
}