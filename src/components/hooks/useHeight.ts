import { useEffect, useState } from 'react';
import { getRect } from './useRect';

export const useHeight = (element: {
    current: Element | undefined;
}): number => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (element.current) {
            setHeight(getRect(element.current).height);
        }
    }, [element.current]);

    return height;
};

export default useHeight;
