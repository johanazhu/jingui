"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var prefixCls = 'jing-detaillist';
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__header")
  }, props.title);
};
var Body = function Body(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__content")
  }, props.children);
};
var Line = function Line() {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "__line")
  });
};
var Item = function Item(props) {
  var leftText = props.leftText,
    rightChildren = props.rightChildren,
    customChildren = props.customChildren,
    leftStyle = props.leftStyle;
  if (!customChildren) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item__left"),
      style: leftStyle
    }, leftText), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item__right")
    }, rightChildren));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "__content--item")
    }, customChildren);
  }
};
var DetailList = function DetailList(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, props.children);
};
DetailList.Header = Header;
DetailList.Body = Body;
DetailList.Item = Item;
DetailList.Line = Line;
var _default = DetailList;
exports.default = _default;