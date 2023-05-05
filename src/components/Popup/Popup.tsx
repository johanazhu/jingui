import React, {
    FC,
    useState,
    useEffect,
    useMemo,
    useRef,
    MouseEvent,
    forwardRef,
    memo,
    useImperativeHandle,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Overlay from '../Overlay';
import Portal from './Portal';
import { IconClose } from '../Icon';
import { PopupInstanceType, PopupProps } from './PropType';
import { isDef } from '@/utils';
import { useIsomorphicLayoutEffect } from '../hooks';

const prefixCls = 'jing-popup';

let globalZIndex = 2000;

const Popup = forwardRef<PopupInstanceType, PopupProps>((props, ref) => {
    const {
        className,
        style,
        position,
        overlay,
        overlayType,
        duration,
        round,
        title,
        lockScroll,
        safeAreaInsetBottom,
        closeable,
        closeIconPosition,
        children,
        onOpen,
        onClose,
        onOpened,
        onClosed,
        closeOnClickOverlay,
        onClick,
        onClickCloseIcon,
        mountContainer,
    } = props;

    const opened = useRef(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const zIndex = useRef<number>(props.zIndex ?? globalZIndex);
    const [visible, setVisible] = useState(props.visible);
    const [animatedVisible, setAnimatedVisible] = useState(visible);

    useIsomorphicLayoutEffect(() => {
        if (visible) {
            setAnimatedVisible(true);
        }
    }, [visible]);

    useIsomorphicLayoutEffect(() => {
        setVisible(props.visible);
    }, [props.visible]);

    const _style = useMemo(() => {
        const initStyle = {
            zIndex: zIndex.current,
            ...style,
        };

        if (isDef(duration)) {
            const key =
                position === 'center'
                    ? 'animationDuration'
                    : 'transitionDuration';
            initStyle[key] = `${duration}ms`;
        }
        return initStyle;
    }, [zIndex.current, position, style, duration]);

    const renderTitle = () => {
        if (title) {
            return (
                <div className={classnames(`${prefixCls}__title`)}>{title}</div>
            );
        }
        return null;
    };

    const open = () => {
        if (props.zIndex !== undefined) {
            zIndex.current = +props.zIndex;
        } else {
            zIndex.current = globalZIndex++;
        }
        opened.current = true;
        onOpen?.();
    };

    const onClickOverlay = (event: MouseEvent) => {
        props.onClickOverlay?.(event);
        if (closeOnClickOverlay) {
            opened.current = false;
            onClose?.();
        }
    };

    const renderOverlay = () => {
        if (overlay) {
            return (
                <Overlay
                    visible={visible}
                    lockScroll={lockScroll}
                    duration={duration}
                    type={overlayType}
                    zIndex={zIndex.current}
                    onClick={onClickOverlay}
                />
            );
        }
        return null;
    };

    const onClickToCloseIcon = (event: MouseEvent) => {
        if (onClickCloseIcon) {
            onClickCloseIcon(event);
        }
        onClose?.();
    };

    const renderCloseIcon = () => {
        if (closeable) {
            return (
                <div
                    className={classnames(
                        `${prefixCls}__close-icon`,
                        `${prefixCls}__close-icon--${closeIconPosition}`,
                    )}
                    onClick={onClickToCloseIcon}
                >
                    {' '}
                    <IconClose />
                </div>
            );
        }
        return null;
    };

    const renderPopup = () => {
        const classes = classnames(className, prefixCls, {
            [`${prefixCls}--${position}`]: position,
            [`${prefixCls}--round`]: round,
            'iphonex-extra-height': safeAreaInsetBottom,
        });

        return (
            <div
                ref={popupRef}
                style={{
                    ..._style,
                    display: !visible && !animatedVisible ? 'none' : undefined,
                }}
                className={classes}
                onClick={onClick}
            >
                {renderTitle()}
                {children}
                {renderCloseIcon()}
            </div>
        );
    };

    const renderTransition = () => {
        const name =
            position === 'center'
                ? 'jing-fade'
                : `jing-popup-slide-${position}`;
        return (
            <CSSTransition
                in={visible}
                nodeRef={popupRef}
                timeout={duration || 300}
                classNames={name}
                mountOnEnter
                unmountOnExit
                onEnter={open}
                onEntered={onOpened}
                onExited={() => {
                    setAnimatedVisible(false);
                    onClosed?.();
                }}
            >
                {renderPopup()}
            </CSSTransition>
        );
    };

    const getComponent = () => {
        if (!overlay) {
            return renderTransition();
        }
        return (
            <>
                {renderOverlay()}
                {renderTransition()}
            </>
        );
    };

    return <Portal mountContainer={mountContainer}>{getComponent()}</Portal>;
});

Popup.defaultProps = {
    duration: 300,
    overlay: true,
    position: 'center',
    round: false,
    mountContainer: document.body,
    closeOnClickOverlay: true,
    safeAreaInsetBottom: false,
    lockScroll: true,
    overlayType: 'normal',
    closeIconPosition: 'top-right',
};

export default memo(Popup);
