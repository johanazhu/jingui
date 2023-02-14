function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { Cell, IconZan, Switch } from '@jojobo/jing-ui';
import { DemoBlock } from "../../../demo";
export default (function () {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u57FA\u672C\u7528\u6CD5",
    padding: "0"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    value: "\u5185\u5BB9"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    value: "\u5185\u5BB9",
    label: "\u63CF\u8FF0\u4FE1\u606F"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    value: "\u5185\u5BB9",
    label: "\u63CF\u8FF0\u4FE1\u606F",
    desc: "\u8BE6\u60C5\u4FE1\u606F"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u6211\u662F\u6807\u9898\u5F88\u957F\u5F88\u957F\u53EF\u4EE5\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\uFF0C\u6CA1\u6709\u94FE\u63A5"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    value: "\u6211\u662F\u5185\u5BB9\u5F88\u957F\u5F88\u957F\u53EF\u4EE5\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\uFF0C\u6CA1\u6709\u94FE\u63A5"
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5C55\u793A\u56FE\u6807",
    padding: "0"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    icon: /*#__PURE__*/React.createElement(IconZan, {
      size: "sm"
    })
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u53EA\u8BBE\u7F6E value",
    padding: "0"
  }, /*#__PURE__*/React.createElement(Cell, {
    value: "\u5185\u5BB9"
  }), /*#__PURE__*/React.createElement(Cell, {
    value: "\u53F3\u4FA7\u63CF\u8FF0\u53EF\u80FD\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F"
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5C55\u793A\u7BAD\u5934",
    padding: "0"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    isLink: true
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    isLink: true,
    value: "\u5185\u5BB9"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u6211\u662F\u6807\u9898\u5F88\u957F\u5F88\u957F\u53EF\u4EE5\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\uFF0C\u6CA1\u6709\u94FE\u63A5",
    isLink: true
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7ED3\u5408Switch",
    padding: "0"
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u8BC1\u4EF6\u957F\u671F\u6709\u6548",
    type: "must",
    style: {
      padding: '3px 16px',
      alignItems: 'center'
    },
    value: /*#__PURE__*/React.createElement(Switch, {
      checked: checked,
      onChange: function onChange(value) {
        return value && setChecked(value);
      }
    })
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5782\u76F4\u5C45\u4E2D",
    padding: "0"
  }, /*#__PURE__*/React.createElement(Cell, {
    center: true,
    title: "\u5355\u5143\u683C",
    value: "\u5185\u5BB9",
    label: "\u63CF\u8FF0\u4FE1\u606F"
  }), /*#__PURE__*/React.createElement(Cell, {
    center: true,
    title: "\u5355\u5143\u683C",
    value: "\u5185\u5BB9",
    desc: "\u8BE6\u60C5\u4FE1\u606F"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u6211\u6807\u9898\u5F88\u957F\u5F88\u957F\u53EF\u4EE5\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\u6362\u884C\uFF0C\u6CA1\u6709\u94FE\u63A5",
    isLink: true,
    center: true
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u5C55\u793A\u5FC5\u586B\u661F\u53F7",
    padding: "0"
  }, /*#__PURE__*/React.createElement(Cell, {
    required: true,
    title: "\u5355\u5143\u683C",
    value: "\u5185\u5BB9"
  })), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7EC4\uFF1A\u5361\u7247\u98CE\u683C",
    padding: "0",
    margin: "0 10px",
    background: ""
  }, /*#__PURE__*/React.createElement(Cell.Group, null, /*#__PURE__*/React.createElement(Cell, {
    title: "\u6211\u53EA\u6709\u6807\u9898 Normal",
    value: "\u5185\u5BB9"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u6211\u6709\u6807\u9898\u548C\u94FE\u63A5",
    isLink: true
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C",
    value: "\u5185\u5BB9",
    label: "\u63CF\u8FF0\u4FE1\u606F",
    desc: "\u8BE6\u60C5\u4FE1\u606F"
  }))), /*#__PURE__*/React.createElement(DemoBlock, {
    title: "\u7EC4\uFF1A\u4E0D\u5E26\u9634\u5F71\u529F\u80FD",
    padding: "12px 0 12px",
    background: ""
  }, /*#__PURE__*/React.createElement(Cell.Group, {
    shadow: false
  }, /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C1",
    value: "\u5185\u5BB91"
  }), /*#__PURE__*/React.createElement(Cell, {
    title: "\u5355\u5143\u683C2",
    value: "\u5185\u5BB92"
  }))));
});