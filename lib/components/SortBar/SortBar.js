"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Sticky = _interopRequireDefault(require("../Sticky"));
var _Filter = _interopRequireDefault(require("./Filter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var prefixCls = 'jing-sortbar';
var SortBar = function SortBar(props) {
  var className = props.className,
    style = props.style,
    activeKey = props.activeKey,
    type = props.type,
    title = props.title,
    sticky = props.sticky,
    children = props.children,
    onClick = props.onClick,
    onChange = props.onChange;
  var onHandleClick = function onHandleClick(key, status) {
    onChange && onChange(key, status);
  };
  var items = _react.default.Children.map(children, function (element, index) {
    if (! /*#__PURE__*/_react.default.isValidElement(element)) return null;
    return /*#__PURE__*/(0, _react.cloneElement)(element, {
      key: index,
      // @ts-ignore
      title: element.props.title,
      itemKey: element.props.itemKey || index,
      selected: activeKey === element.props.itemKey,
      onClick: function onClick(status) {
        return onHandleClick(element.props.itemKey, status);
      }
    });
  });
  var classes = (0, _classnames.default)(prefixCls, className, "".concat(prefixCls, "--").concat(type));
  var Content = /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    style: style
  }, items, /*#__PURE__*/_react.default.createElement(_Filter.default, {
    title: title,
    onClick: onClick
  }));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sticky ? /*#__PURE__*/_react.default.createElement(_Sticky.default, null, " ", Content, " ") : Content);
};
SortBar.defaultProps = {
  sticky: true,
  type: 'normal'
};
var _default = SortBar;
exports.default = _default;