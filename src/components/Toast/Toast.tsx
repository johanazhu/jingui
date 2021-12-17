import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { ToastProps } from './PropType';
import Popup from '../Popup';
import Loading from '../Loading';
import { IconRight, IconClose } from '../Icon';
import { isDef } from '@/utils';

const prefixCls = 'jing-toast';

const Toast: FC<ToastProps> = (props: any) => {
    const {
        className,
        style,
        visible,
        type,
        message,
        duration,
        icon,
        loadingType,
        overlay,
        forbidClick,
        closeOnClickOverlay,
        onClick,
        onClose,
        onClosed,
        onOpened,
    } = props;

    const renderIcon = () => {
        const hasIcon = icon || type === 'success' || type === 'fail';

        if (hasIcon) {
            return typeof icon === 'string' ? (
                type === 'success' ? (
                    <IconRight size="lg" />
                ) : (
                    <IconClose size="lg" />
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
    const classes = classnames(className, prefixCls);

    return (
        <Popup
            className={classes}
            style={style}
            visible={visible}
            duration={duration}
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
};

export default memo(Toast);
