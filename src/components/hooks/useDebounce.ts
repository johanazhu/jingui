import { useState, useEffect } from 'react';
import useDebounceFn, { DebounceOptions } from './useDebounceFn';

function useDebounce<T>(value: T, options?: DebounceOptions) {
    const [debounced, setDebounced] = useState(value);

    const { run } = useDebounceFn(() => {
        setDebounced(value);
    }, options);

    useEffect(() => {
        run();
    }, [value]);

    return debounced;
}

export default useDebounce;
