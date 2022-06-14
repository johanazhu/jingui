import throttle from 'lodash/throttle';
import { useMemo } from 'react';
import useLatest from './use-latest';
import useUnmount from './use-unmount';

type noop = (...args: any) => any;

export interface ThrottleOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
}

function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions) {
    const fnRef = useLatest(fn);

    const wait = options?.wait ?? 1000;

    const throttled = useMemo(
        () =>
            throttle(
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
        throttled.cancel();
    });

    return {
        run: throttled,
        cancel: throttled.cancel,
        flush: throttled.flush,
    };
}

export default useThrottleFn;
