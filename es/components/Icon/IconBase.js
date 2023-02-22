import * as React from 'react';
var IconBase = function IconBase(props) {
  var svgClass = props.svgClass,
    icon = props.icon,
    fill = props.fill;
  return /*#__PURE__*/React.createElement(icon, {
    role: 'img',
    key: "svg-".concat(icon.name),
    'aria-label': "svg-".concat(icon.name),
    focusable: 'false',
    'data-icon': "svg-".concat(icon.name),
    className: svgClass,
    'aria-hidden': 'true',
    fill: fill
  });
};
export default IconBase;