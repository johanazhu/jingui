import React, {
    useState,
    useEffect,
    useRef,
    forwardRef,
    memo,
    TouchEvent,
} from 'react';
import classnames from 'classnames';
import Portal from './Portal';
import { SPEED } from '@/utils';
import Mask from '../Mask';
import { PopupProps } from './PropType';

const Popup = forwardRef((props: PopupProps, ref: any) => {
    const {} = props;

    return <div>2222</div>;
});

export default memo(Popup);
