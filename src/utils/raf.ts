import { inBrowser } from './base'
// @ts-ignore
const root = inBrowser ? window : global;

let prev = Date.now();

// 补间动画polyfill
export function rafPolyfill(fun: FrameRequestCallback): number {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fun, ms);
    prev = curr + ms;
    return id;
}

export function raf(fun: FrameRequestCallback): number {
    const requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
    return requestAnimationFrame.call(root, fun);
}

export function cancelRaf(id: number) {
    const cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout;
    cancelAnimationFrame.call(root, id);
}

// double raf for animation
export function doubleRaf(fn: FrameRequestCallback): void {
    raf(() => {
        raf(fn);
    });
}
