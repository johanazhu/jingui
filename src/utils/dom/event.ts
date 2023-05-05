import React, { ReactElement, TouchEvent } from 'react';

export type EventHandler = (event: Event) => void;

export let supportsPassive = false;

try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
        get() {
            supportsPassive = true;
        },
    });
    window.addEventListener('test-passive', null as any, opts);
} catch (e) {}

export function on(
    target: EventTarget,
    event: string,
    handler: EventHandler,
    passive = false,
) {
    target.addEventListener(
        event,
        handler,
        supportsPassive ? { capture: false, passive } : false,
    );
}

export function stopPropagation(event: Event): void {
    event.stopPropagation();
}

export function preventDefault(
    event: TouchEvent | Event,
    isStopPropagation?: boolean,
): void {
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
    }

    if (isStopPropagation) {
        stopPropagation(event as Event);
    }
}
