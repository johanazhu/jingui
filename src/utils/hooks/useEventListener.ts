import React from 'react';

export function useLatest<T>(something: T) {
    const ref = React.useRef(something);
    ref.current = something;
    return ref;
}

export function useEventListener<K extends keyof WindowEventMap>(
    type: K,
    fn: (evt: WindowEventMap[K]) => void,
) {
    const latest = useLatest(fn);

    React.useEffect(() => {
        function wrapper(evt: WindowEventMap[K]) {
            latest.current(evt);
        }
        window.addEventListener(type, wrapper);

        return () => {
            window.removeEventListener(type, wrapper);
        };
    }, [type, latest]);
}

// https://github.com/MinJieLiu/mac-scrollbar/blob/main/packages/mac-scrollbar/src/hooks.tsx
