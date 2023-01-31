import React from 'react';
import classnames from 'classnames';
import Tag from "../Tag";
import { IconArrow } from "../Icon";
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
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('BankCard', className),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "BankCard__icon"
  }, bankNo), /*#__PURE__*/React.createElement("div", {
    className: "BankCard__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "BankCard__content-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "BankCard__content-desc"
  }, desc), footer && /*#__PURE__*/React.createElement("div", {
    className: "BankCard__content-footer"
  }, footer), /*#__PURE__*/React.createElement("div", {
    className: "ProductCard__header-taglist"
  }, tagList && tagList.map(function (item, i) {
    return /*#__PURE__*/React.createElement(Tag
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
    }, item.labelName, (item.labelContentLinkPkid || item.largePaymentFlag) && /*#__PURE__*/React.createElement(IconArrow, {
      size: "auto",
      color: "orange"
    }));
  }))), rightRender());
};
export default BankCard;