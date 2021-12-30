import { useRef } from 'react';

export function useRefs() {
    const refs = useRef<HTMLDivElement[]>([]);

    const setRefs = (index: number) => (el: HTMLDivElement) => {
        refs.current[index] = el;
    };
    return [refs.current, setRefs as any];
}
