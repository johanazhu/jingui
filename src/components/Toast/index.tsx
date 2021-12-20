import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import BaseToast from './Toast';
import { lockClick } from './lock-click';
import { isObject } from '@/utils';
import { resolveContainer } from '@/utils/dom/getContainer';
import {
    ToastProps,
    ToastInstance,
    ToastReturnType,
    ToastType,
} from './PropType';

const defaultOptions: ToastProps = {
    icon: '',
    message: '',
    type: 'info',
    duration: 2000,
    loadingType: 'circular',
    overlay: false,
    forbidClick: false,
    mountContainer: () => document.body,
};

const toastArray: (() => void)[] = [];
let allowMultiple = false;
let currentOptions = Object.assign({}, defaultOptions);
const defaultOptionsMap = new Map<string, ToastProps>();

function syncClear() {
    let fn = toastArray.pop();
    while (fn) {
        fn();
        fn = toastArray.pop();
    }
}
// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
function nextTickClear() {
    setTimeout(syncClear);
}

const Toast = (p: ToastProps): unknown => {
    const props = parseOptions(p);
    const update: ToastReturnType = {
        config: () => {},
        clear: () => null,
    };

    let timer = 0;
    const { onClose, mountContainer } = props;
    const container = document.createElement('div');
    const bodyContainer = resolveContainer(mountContainer);
    bodyContainer.appendChild(container);

    const TempToast = () => {
        const options = {
            duration: 2000,
            ...props,
        } as ToastProps;

        const [visible, setVisible] = useState(false);
        const [state, setState] = useState<ToastProps>({ ...options });

        const internalOnClosed = useCallback(() => {
            if (state.forbidClick) {
                lockClick(false);
            }
            const unmountResult = ReactDOM.unmountComponentAtNode(container);
            if (unmountResult && container.parentNode) {
                container.parentNode.removeChild(container);
            }
        }, [container]);

        const destroy = useCallback(() => {
            setVisible(false);
            if (onClose) onClose();
        }, []);

        update.clear = internalOnClosed;

        update.config = useCallback(
            (nextState: any) => {
                setState((prev) =>
                    typeof nextState === 'function'
                        ? { ...prev, ...nextState(prev) }
                        : { ...prev, ...nextState },
                );
            },
            [setState],
        );

        useEffect(() => {
            setVisible(true);
            if (!allowMultiple) syncClear();
            toastArray.push(internalOnClosed);

            if (state.duration !== 0 && 'duration' in state) {
                //@ts-ignore
                timer = window.setTimeout(destroy, +state.duration);
            }
            return () => {
                if (timer !== 0) {
                    window.clearTimeout(timer);
                }
            };
        }, []);

        return (
            <BaseToast
                {...state}
                visible={visible}
                mountContainer={() => container}
                onClose={destroy}
                onClosed={internalOnClosed}
            />
        );
    };

    ReactDOM.render(<TempToast />, container);

    return update;
};

function parseOptions(message: any) {
    if (isObject(message)) {
        return message;
    }
    return { message };
}

const createMethod = (type: any) => (options: any) =>
    Toast({
        ...currentOptions,
        ...defaultOptionsMap.get(type),
        ...parseOptions(options),
        type,
    });

['info', 'loading', 'success', 'fail'].forEach((method) => {
    //@ts-ignore
    Toast[method] = createMethod(method);
});

Toast.allowMultiple = (value = true) => {
    allowMultiple = value;
};

Toast.clear = nextTickClear;

export default Toast as ToastInstance;
export type { ToastType, ToastOptions } from './PropType';
