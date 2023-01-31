"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRefs;
var _react = require("react");
function useRefs() {
  var refs = (0, _react.useRef)([]);
  var setRefs = (0, _react.useCallback)(function (index) {
    return function (el) {
      if (el) refs.current[index] = el;
    };
  }, []);
  var reset = (0, _react.useCallback)(function () {
    refs.current = [];
  }, []);
  return [refs.current, setRefs, reset];
}