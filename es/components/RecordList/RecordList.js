function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import classnames from 'classnames';
import { IconArrow } from "../Icon";
var prefixCls = 'jing-recordList';
var RecordList = function RecordList(props) {
  var _classnames;
  var leftTopText = props.leftTopText,
    leftBottomText = props.leftBottomText,
    rightTopText = props.rightTopText,
    rightBottomText = props.rightBottomText,
    rightTopClassName = props.rightTopClassName,
    rightBottomClassName = props.rightBottomClassName,
    link = props.link,
    colWidth = props.colWidth,
    onClick = props.onClick;
  var classes = classnames(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "--link"), !link), _defineProperty(_classnames, "".concat(prefixCls, "--action"), true), _classnames));
  var leftClasses = classnames("col-xs-".concat(colWidth));
  var rightClasses = classnames("col-xs-".concat(24 - colWidth, " am-align-right"));
  var rightTopClasses = classnames('am-sm ellipsis', rightTopClassName, {
    'RecordList-centerText': !rightBottomText
  });
  var rightBottomClasses = classnames('am-xs ellipsis', rightBottomClassName, {
    'RecordList-centerText': !rightTopText
  });
  function onLinkClick() {
    if (link) {
      onClick && onClick();
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    onClick: onLinkClick
  }, /*#__PURE__*/React.createElement("div", {
    className: leftClasses
  }, /*#__PURE__*/React.createElement("div", {
    className: "am-sm ellipsis"
  }, leftTopText), /*#__PURE__*/React.createElement("div", {
    className: "am-xs ellipsis"
  }, leftBottomText)), /*#__PURE__*/React.createElement("div", {
    className: rightClasses
  }, /*#__PURE__*/React.createElement("div", {
    className: rightTopClasses
  }, rightTopText), rightBottomText && /*#__PURE__*/React.createElement("div", {
    className: rightBottomClasses
  }, rightBottomText)), link && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "--arrowicon")
  }, /*#__PURE__*/React.createElement(IconArrow, {
    size: "sm"
  })));
};
RecordList.defaultProps = {
  link: false,
  colWidth: 12
};
export default RecordList;