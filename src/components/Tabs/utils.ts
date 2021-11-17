import { raf, cancelRaf } from '@/utils';

let rafId: number;

export function scrollLeftTo(
    scroller: HTMLElement,
    to: number,
    duration: number,
) {
    cancelRaf(rafId);

    let count = 0;
    const from = scroller.scrollLeft;
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

    function animate() {
        scroller.scrollLeft += (to - from) / frames;

        if (++count < frames) {
            rafId = raf(animate);
        }
    }

    animate();
}
