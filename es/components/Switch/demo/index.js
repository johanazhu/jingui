function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Switch, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    className: "demo-switch",
    padding: "",
    title: "\u57FA\u7840\u7528\u6CD5"
  }, /*#__PURE__*/React.createElement(Cell, {
    center: true,
    title: "\u666E\u901A",
    value: /*#__PURE__*/React.createElement(Switch, {
      checked: checked,
      onChange: function onChange(value) {
        return value && setChecked(value);
      }
    })
  }), /*#__PURE__*/React.createElement(Cell, {
    center: true,
    title: "\u9ED8\u8BA4\u5F00",
    value: /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })
  }), /*#__PURE__*/React.createElement(Cell, {
    center: true,
    title: "\u7981\u7528\u7684\u5F00\u5173\uFF08\u9ED8\u8BA4\u5173\uFF09",
    value: /*#__PURE__*/React.createElement(Switch, {
      disabled: true
    })
  }), /*#__PURE__*/React.createElement(Cell, {
    center: true,
    title: "\u7981\u7528\u7684\u5F00\u5173\uFF08\u9ED8\u8BA4\u5F00\uFF09",
    value: /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true,
      disabled: true
    })
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    className: "demo-switch",
    padding: "",
    title: "\u81EA\u5B9A\u4E49\u5C3A\u5BF8"
  }, /*#__PURE__*/React.createElement(Cell, {
    center: true,
    title: "\u81EA\u5B9A\u4E49\u5C3A\u5BF8",
    value: /*#__PURE__*/React.createElement(Switch, {
      size: 24,
      checked: checked,
      onChange: function onChange(value) {
        return value && setChecked(value);
      }
    })
  })));
});