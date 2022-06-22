import { useRef, useCallback } from 'react';

export default function useRefs() {
    const refs = useRef<HTMLDivElement[]>([]);

    const setRefs = useCallback(
        (index: number) => (el: HTMLDivElement) => {
            if (el) refs.current[index] = el;
        },
        [],
    );

    const reset = useCallback(() => {
        refs.current = [];
    }, []);

    return [refs.current, setRefs as any, reset];
}
