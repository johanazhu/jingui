import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { ToastProps } from './PropType';
import Popup from '../Popup';
import Loading from '../Loading';
import { isDef } from '@/utils';

const prefixCls = 'jing-toast';

const Toast: FC<ToastProps & { visible?: boolean }> = (props: any) => {
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
        position,
        onClose,
        onClick,
    } = props;

    const renderIcon = () => {
        if (type === 'loading') {
            return (
                <Loading
                    className={classnames(`${prefixCls}--loading`)}
                    type={loadingType}
                />
            );
        }
        return null;
    };

    const renderMessage = () => {
        if (isDef(message) && message !== '') {
            return (
                <div className={classnames(`${prefixCls}--info`)}>
                    {message}
                </div>
            );
        }
        return null;
    };
    const classes = classnames(className, prefixCls, {
        [`${prefixCls}--${position}`]: position,
    });

    return (
        <Popup
            className={classes}
            visible={visible}
            position={position}
            duration={duration}
            overlay={overlay}
            lockScroll={false}
            onClose={onClose}
        >
            <>
                {renderIcon}
                {renderMessage}
            </>
        </Popup>
    );
};

Toast.defaultProps = {
    type: 'info',
    duration: 2000,
    position: 'middle',
    loadingType: 'circular',
    overlay: false,
};

export default memo(Toast);
