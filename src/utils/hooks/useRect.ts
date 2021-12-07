// import { useRef } from 'react';
// const isWindow = (val: unknown): val is Window => val === window;

// const makeDOMRect = (width: number, height: number) => ({
//     top: 0,
//     left: 0,
//     right: width,
//     bottom: height,
//     width,
//     height,
// } as DOMRect);

// export const useRect = (
//     elementOrRef: Element | Window | undefined | any
// ) => {
//     const element = useRef(elementOrRef)

//     if (isWindow(element)) {
//         const width = element.innerWidth;
//         const height = element.innerHeight;
//         return makeDOMRect(width, height)
//     }

//     if (element?.getBoundingClientRect) {
//         return element.getBoundingClientRect()
//     }

//     return makeDOMRect(0, 0);
// }
