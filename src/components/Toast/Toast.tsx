import React, { useEffect, FC, memo } from 'react';
import classnames from 'classnames';
import { ToastProps, ToastPrivateProps } from './PropType';
import Popup from '../Popup';
import Loading from '../Loading';
import { IconRight, IconClose } from '../Icon';
import { isDef } from '@/utils';
import { lockClick } from './lock-click';

const prefixCls = 'jing-toast';

const Toast: FC<ToastProps & ToastPrivateProps & { visible?: boolean }> = (
    props: any,
) => {
    const {
        className,
        style,
        visible,
        type,
        message,
        icon,
        loadingType,
        overlay,
        forbidClick,
        closeOnClickOverlay,
        closeOnClick,
        onClose,
        onClosed,
        onOpened,
    } = props;

    let clickable = false;

    useEffect(() => {
        toggleClickable();
    }, [visible, forbidClick]);

    const toggleClickable = () => {
        const newValue = visible && forbidClick;
        if (clickable !== newValue) {
            clickable = newValue;
            lockClick(clickable);
        }
        if (!visible) {
            lockClick(false);
        }
    };

    const onClick = () => {
        if (closeOnClick) {
            props.onClick();
        }
    };

    const renderIcon = () => {
        const hasIcon = icon || type === 'success' || type === 'fail';

        if (hasIcon) {
            return typeof icon === 'string' ? (
                type === 'success' ? (
                    <IconRight color="white" className={`${prefixCls}__icon`} />
                ) : (
                    <IconClose color="white" className={`${prefixCls}__icon`} />
                )
            ) : (
                icon
            );
        }

        if (type === 'loading') {
            return (
                <Loading
                    className={classnames(`${prefixCls}__loading`)}
                    type={loadingType}
                />
            );
        }
        return null;
    };

    const renderMessage = () => {
        if (isDef(message) && message !== '') {
            return (
                <div className={classnames(`${prefixCls}__info`)}>
                    {message}
                </div>
            );
        }
        return null;
    };

    const classes = classnames(className, prefixCls, `${prefixCls}--${type}`);

    return (
        <Popup
            className={classes}
            style={style}
            visible={visible}
            overlay={overlay}
            lockScroll={false}
            onClick={onClick}
            onClose={onClose}
            onClosed={onClosed}
            onOpened={onOpened}
            closeOnClickOverlay={closeOnClickOverlay}
        >
            {renderIcon()}
            {renderMessage()}
        </Popup>
    );
};

Toast.defaultProps = {
    type: 'info',
    duration: 2000,
    loadingType: 'circular',
    overlay: false,
    forbidClick: false,
    mountContainer: () => document.body,
};

export default memo(Toast);
