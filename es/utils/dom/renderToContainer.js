// import { createPortal } from 'react-dom';
// import { ReactElement } from 'react';
// import { resolveContainer } from './getContainer';
// import { GetContainer } from '@/utils';

// export function renderToContainer(
//     getContainer: GetContainer,
//     node: ReactElement,
// ): ReactElement {
//     if (getContainer) {
//         const container = resolveContainer(getContainer);
//         return createPortal(node, container);
//     }
//     return node;
// }

import { createPortal } from 'react-dom';
import { resolveContainer } from "./getContainer";
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
export function renderToContainer(getContainer, node) {
  if (canUseDom() && getContainer) {
    var container = resolveContainer(getContainer);
    return /*#__PURE__*/createPortal(node, container);
  }
  return node;
}