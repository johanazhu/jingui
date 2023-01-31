import * as React from 'react';
var IconBase = function IconBase(props) {
  var svgClass = props.svgClass,
    icon = props.icon;
  return /*#__PURE__*/React.createElement(icon, {
    role: 'img',
    key: "svg-".concat(icon.name),
    className: svgClass,
    'aria-hidden': 'true'
  });
};
export default IconBase;