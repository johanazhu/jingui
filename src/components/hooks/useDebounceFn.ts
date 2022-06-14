import debounce from 'lodash/debounce';
import { useMemo } from 'react';
import useLatest from './use-latest';
import useUnmount from './use-unmount';

type noop = (...args: any) => any;

export interface DebounceOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}

function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
    const fnRef = useLatest(fn);

    const wait = options?.wait ?? 1000;

    const debounced = useMemo(
        () =>
            debounce(
                (...args: Parameters<T>): ReturnType<T> => {
                    // @ts-ignore
                    return fnRef.current(...args);
                },
                wait,
                options,
            ),
        [],
    );

    useUnmount(() => {
        debounced.cancel();
    });

    return {
        run: debounced,
        cancel: debounced.cancel,
        flush: debounced.flush,
    };
}

export default useDebounceFn;
