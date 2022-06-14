import { useEffect } from 'react';
import useLatest from './use-latest';

const useUnmount = (fn: () => void) => {
    const fnRef = useLatest(fn);

    useEffect(
        () => () => {
            fnRef.current();
        },
        [],
    );
};

export default useUnmount;
