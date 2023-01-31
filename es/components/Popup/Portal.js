import { renderToContainer } from "../../utils/dom/renderToContainer";
var Portal = function Portal(props) {
  var children = props.children,
    _props$mountContainer = props.mountContainer,
    mountContainer = _props$mountContainer === void 0 ? document.body : _props$mountContainer;
  return renderToContainer(mountContainer, children);
};
Portal.defaultProps = {
  mountContainer: document.body
};
export default Portal;