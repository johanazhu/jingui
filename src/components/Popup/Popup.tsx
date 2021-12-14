import React, {
    FC,
    useState,
    useEffect,
    useRef,
    MouseEvent,
    memo,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import Overlay from '../Overlay';
import Portal from './Portal';
import { PopupProps } from './PropType';

const prefixCls = 'jing-popup';

const Popup: FC<PopupProps> = (props) => {
    const {
        className,
        style,
        visible,
        position,
        overlay,
        overlayType,
        duration,
        destroy,
        lockScroll,
        safeAreaInsetBottom,
        children,
        afterOpen,
        afterClose,
        mountContainer,
    } = props;

    const popupRef = useRef<HTMLDivElement>();

    const onClickOverlay = (event: MouseEvent) => {
        props.onClickOverlay?.(event);
    };

    const OverlayRender = () => {
        if (overlay) {
            return (
                <Overlay
                    visible={visible}
                    lockScroll={props.lockScroll}
                    duration={duration}
                    type={overlayType}
                    onClick={onClickOverlay}
                />
            );
        }
        return null;
    };

    const getComponent = () => {
        const name =
            position === 'center'
                ? 'jing-fade'
                : `jing-popup-slide-${position}`;

        if (!overlay) {
            return (
                <div className="popup" role="dialog">
                    {children}
                </div>
            );
        }

        return (
            <CSSTransition
                in={visible}
                nodeRef={popupRef}
                timeout={duration}
                classNames={name}
                mountOnEnter
                unmountOnExit
                // onEnter={open}
                // onEntered={props.onOpened}
                // onExited={() => {
                //     setAnimatedVisible(false);
                //     props.onClosed?.();
                // }}
            >
                {children}
            </CSSTransition>
        );
    };

    return (
        <Portal mountContainer={mountContainer}>
            {OverlayRender()}
            {getComponent()}
        </Portal>
    );
};

export default memo(Popup);
