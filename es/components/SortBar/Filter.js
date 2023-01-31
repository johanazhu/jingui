import React, { memo } from 'react';
import classnames from 'classnames';
import { IconFilter } from "../Icon";
var prefixCls = 'jing-sortbar__filter';
var Filter = function Filter(props) {
  var title = props.title,
    onClick = props.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames("".concat(prefixCls)),
    onClick: onClick
  }, title, /*#__PURE__*/React.createElement(IconFilter, {
    size: "sm"
  }));
};
Filter.defaultProps = {
  title: '筛选'
};
export default /*#__PURE__*/memo(Filter);