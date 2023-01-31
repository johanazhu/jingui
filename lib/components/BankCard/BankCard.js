"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Tag = _interopRequireDefault(require("../Tag"));
var _Icon = require("../Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BankCard = function BankCard(props) {
  var bankNo = props.bankNo,
    title = props.title,
    desc = props.desc,
    footer = props.footer,
    className = props.className,
    tagList = props.tagList,
    onClick = props.onClick,
    onClickToIcon = props.onClickToIcon,
    rightRender = props.rightRender;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('BankCard', className),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "BankCard__icon"
  }, bankNo), /*#__PURE__*/_react.default.createElement("div", {
    className: "BankCard__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "BankCard__content-title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "BankCard__content-desc"
  }, desc), footer && /*#__PURE__*/_react.default.createElement("div", {
    className: "BankCard__content-footer"
  }, footer), /*#__PURE__*/_react.default.createElement("div", {
    className: "ProductCard__header-taglist"
  }, tagList && tagList.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_Tag.default
    // color="orange"
    , {
      key: i,
      onClick: function onClick(e) {
        if (item.labelContentLinkPkid) {
          e.stopPropagation();
          onClickToIcon === null || onClickToIcon === void 0 ? void 0 : onClickToIcon(item.labelContentLinkPkid);
        }
        if (item.largePaymentFlag) {
          e.stopPropagation();
          onClickToIcon === null || onClickToIcon === void 0 ? void 0 : onClickToIcon(item.largePaymentFlag);
        }
      }
    }, item.labelName, (item.labelContentLinkPkid || item.largePaymentFlag) && /*#__PURE__*/_react.default.createElement(_Icon.IconArrow, {
      size: "auto",
      color: "orange"
    }));
  }))), rightRender());
};
var _default = BankCard;
exports.default = _default;