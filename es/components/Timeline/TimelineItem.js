function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { memo } from 'react';
import classnames from 'classnames';
var prefixCls = 'jing-timeline--item';
var TimelineItem = function TimelineItem(props) {
  var header = props.header,
    footer = props.footer,
    color = props.color,
    dashed = props.dashed,
    count = props.count,
    percent = props.percent,
    showPercent = props.showPercent,
    i = props.i,
    canShowColor = props.canShowColor;
  var dotClass = classnames("".concat(prefixCls, "__content"), _defineProperty({}, "".concat(prefixCls, "__content--dashed"), dashed));
  var stepClass = classnames("".concat(prefixCls, "__step"), _defineProperty({}, "".concat(prefixCls, "__step--dashed"), dashed));
  var isShowColor =
  // @ts-ignore
  parseInt(percent) - "".concat(count && i && 100 / count * i);
  return /*#__PURE__*/React.createElement("li", {
    className: classnames(prefixCls, _defineProperty({}, "".concat(prefixCls, "--isShowPercent"), showPercent)),
    style: {
      width: "".concat(count && 100 / count, "%")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: stepClass,
    style: {
      backgroundColor: isShowColor > 0 && percent === '100%' ? color : ''
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__header")
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__contents")
  }, /*#__PURE__*/React.createElement("div", {
    className: dotClass,
    style: {
      backgroundColor: isShowColor > 0 && canShowColor && !dashed ? color : '',
      borderColor: isShowColor > 0 && canShowColor ? color : ''
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__footer")
  }, footer));
};
TimelineItem.defaultProps = {
  dashed: false,
  canShowColor: true
};
export default /*#__PURE__*/memo(TimelineItem);