import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import BaseModal from './Modal';

import { ModalProps, AlertModalProps, ModalStatic } from './PropType';
import { resolveContainer } from '@/utils/dom/getContainer';
import { noop } from '@/utils';

const Modal = BaseModal as ModalStatic;

Modal.show = (props: ModalProps) => {
    const defaultOptions = {
        overlay: true,
        closeable: false,
        closeIcon: 'cross',
        lockScroll: true,
        showConfirmButton: true,
        showCancelButton: false,
        closeOnClickOverlay: false,
    };

    const {
        onClosed,
        onCancel = noop,
        onConfirm = noop,
        onClose = noop,
        cancelProps,
        confirmProps,
        ...restProps
    } = props;

    const userContainer = resolveContainer(props.teleport);
    const container = document.createElement('div');
    userContainer.appendChild(container);

    let destory = noop;

    const TempModal = () => {
        const [visible, setVisible] = useState(false);
        const [cancelLoading, setCancelLoading] = useState(false);
        const [okLoading, setOkLoading] = useState(false);

        useEffect(() => {
            setVisible(true);
        }, []);

        destory = () => {
            setVisible(false);
            if (onClose) onClose();
        };

        const _afterClose = () => {
            if (onClosed) onClosed();
            // 卸载节点
            const unmountResult = ReactDOM.unmountComponentAtNode(container);
            if (unmountResult && container.parentNode) {
                container.parentNode.removeChild(container);
            }
        };

        const _onConfirm = async (e: any) => {
            const i = setTimeout(() => setOkLoading(true));
            if (onConfirm && (await onConfirm(e)) !== false) {
                clearTimeout(i);
                destory();
            } else {
                clearTimeout(i);
                setOkLoading(true);
            }
        };

        const _onCancel = async (e: any, clickOverlay?: any) => {
            if (clickOverlay) {
                destory();
                return;
            }
            const i = setTimeout(() => setCancelLoading(true));
            if (onCancel && (await onCancel(e)) !== false) {
                clearTimeout(i);
                destory();
            } else {
                clearTimeout(i);
                setOkLoading(true);
            }
        };

        return (
            <BaseModal
                {...defaultOptions}
                {...restProps}
                visible={visible}
                teleport={() => container}
                cancelProps={{ loading: cancelLoading, ...cancelProps }}
                confirmProps={{ loading: okLoading, ...confirmProps }}
                onClose={destory}
                onClosed={_afterClose}
                onCancel={_onCancel}
                onConfirm={_onConfirm}
            />
        );
    };

    ReactDOM.render(<TempModal />, container);

    return destory;
};

Modal.alert = (props: AlertModalProps) => {
    const { onConfirm = noop } = props;

    return new Promise((resolve) => {
        Modal.show({
            ...props,
            onConfirm: (e) => {
                onConfirm?.(e);
                resolve(e);
            },
        });
    });
};

Modal.confirm = (props: ModalProps) => {
    const { onCancel = noop, onConfirm = noop } = props;
    return new Promise((resolve, reject) => {
        Modal.show({
            confirmButtonText: '确认',
            showCancelButton: true,
            ...props,
            onConfirm: (e) => {
                onConfirm?.(e);
                resolve(true);
            },
            onCancel: (e) => {
                onCancel?.(e);
                reject();
            },
        });
    });
};

export type { ModalProps, AlertModalProps, ModalStatic } from './PropType';
export default Modal;
