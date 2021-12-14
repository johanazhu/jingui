import React, { FC, useState, useEffect, MouseEvent, memo } from 'react';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group';
import Overlay from '../Overlay';
import { PortalProps } from './PropType';

const IS_REACT_16 = !!createPortal;

const prefixCls = 'jing-popup';

const Portal: FC<PortalProps> = (props) => {
    const {
        className,
        style,
        visible,
        position,
        mask,
        maskType,
        destroy,
        lockScroll,
        safeAreaInsetBottom,
        children,
        afterOpen,
        afterClose,
        onMaskClick,
        mountContainer,
    } = props;

    const [containerEl] = useState(() => {
        const el = document.createElement('div');
        el.className += `${prefixCls}__container ${className}`;
        return el;
    });

    useEffect(() => {
        document.body.appendChild(mountContainer || containerEl);

        return () => {
            document.body.removeChild(containerEl);
        };
    }, []);

    const handleOverlayClick = (e: MouseEvent) => {
        e.stopPropagation();
        if (typeof onMaskClick === 'function') {
            onMaskClick();
        }
    };

    const OverlayRender = () => {
        return Overlay && <Overlay visible type={maskType} />;
    };

    const getComponent = () => {
        const animationState = visible ? 'enter' : 'leave';

        // const class
        // csonst style

        if (!Overlay) {
            return (
                <div className="popup" role="dialog">
                    {children}
                </div>
            );
        }
        // <CSSTransition
        //     in={visible && rendered}
        //     /**
        //      * https://github.com/reactjs/react-transition-group/pull/559
        //      */
        //     nodeRef={popupRef}
        //     timeout={duration}
        //     classNames={transition || name}
        //     mountOnEnter={!forceRender}
        //     unmountOnExit={destroyOnClose}
        //     onEnter={open}
        //     onEntered={props.onOpened}
        //     onExited={() => {
        //         setAnimatedVisible(false);
        //         props.onClosed?.();
        //     }}
        // >
        //     {renderPopup()}
        // </CSSTransition>

        return (
            <>
                {OverlayRender()}
                <div
                    className="wrapper"
                    role="dialog"
                    onClick={(e: MouseEvent) => handleOverlayClick(e)}
                >
                    <div className="popup" role="document">
                        {children}
                    </div>
                </div>
            </>
        );
    };

    return createPortal(getComponent(), containerEl);
};

export default memo(Portal);
