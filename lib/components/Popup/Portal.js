"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderToContainer = require("../../utils/dom/renderToContainer");
var Portal = function Portal(props) {
  var children = props.children,
    _props$mountContainer = props.mountContainer,
    mountContainer = _props$mountContainer === void 0 ? document.body : _props$mountContainer;
  return (0, _renderToContainer.renderToContainer)(mountContainer, children);
};
Portal.defaultProps = {
  mountContainer: document.body
};
var _default = Portal;
exports.default = _default;