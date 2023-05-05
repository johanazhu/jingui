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
import { ReactElement } from 'react';
import { resolveContainer } from './getContainer';

function canUseDom(): boolean {
    return !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
    );
}

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(
    getContainer: GetContainer,
    node: ReactElement,
): ReactElement {
    if (canUseDom() && getContainer) {
        const container = resolveContainer(getContainer);
        return createPortal(node, container);
    }
    return node;
}
