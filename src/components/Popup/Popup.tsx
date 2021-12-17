import React, {
    FC,
    useState,
    useEffect,
    useMemo,
    useRef,
    MouseEvent,
    memo,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Overlay from '../Overlay';
import Portal from './Portal';
import { IconClose } from '../Icon';
import { PopupProps } from './PropType';
import { isDef } from '@/utils';

const prefixCls = 'jing-popup';

let globalZIndex = 2000;

const Popup: FC<PopupProps> = (props: any) => {
    const {
        className,
        style,
        visible,
        position,
        overlay,
        overlayType,
        duration,
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

    const popupRef = useRef<HTMLDivElement>(null);
    const zIndex = useRef<number>(props.zIndex ?? globalZIndex);
    const [animatedVisible, setAnimatedVisible] = useState(visible);

    useEffect(() => {
        if (visible) {
            setAnimatedVisible(true);
        }
    }, [visible]);

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
    }, [zIndex.current, style, duration]);

    const open = () => {
        if (props.zIndex !== undefined) {
            zIndex.current = +props.zIndex;
        } else {
            zIndex.current = globalZIndex++;
        }

        onOpen?.();
    };

    const onClickOverlay = (event: MouseEvent) => {
        props.onClickOverlay?.(event);
        if (closeOnClickOverlay) {
            onClose?.();
        }
    };

    const OverlayRender = () => {
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
                timeout={duration}
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
                {OverlayRender()}
                {renderTransition()}
            </>
        );
    };

    return <Portal mountContainer={mountContainer}>{getComponent()}</Portal>;
};

Popup.defaultProps = {
    duration: 300,
    overlay: true,
    position: 'center',
    mountContainer: document.body,
    closeOnClickOverlay: true,
    safeAreaInsetBottom: false,
    lockScroll: true,
    overlayType: 'normal',
    closeIconPosition: 'top-right',
};

export default memo(Popup);
