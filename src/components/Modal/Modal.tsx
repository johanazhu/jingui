import React, { FC } from 'react';
import classnames from 'classnames';
import { ModalProps } from './PropType';
import Popup from '../Popup';
import Button from '../Button';
import { addUnit, noop, BORDER_TOP, BORDER_LEFT } from '@/utils';

const prefixCls = 'jing-modal';

const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        style,
        title,
        visible,
        message,
        messageAlign = 'center',
        width,
        closeOnClickOverlay,
        footer,
        children,
        showCancelButton,
        showConfirmButton = true,
        cancelButtonText,
        confirmButtonText = '确定',
        cancelButtonColor,
        confirmButtonColor,
        cancelProps,
        confirmProps,
        onClose,
        onClosed,
        onCancel,
        onConfirm,
        ...others
    } = props;

    const classes = classnames(prefixCls, className);

    const renderTitle = () => {
        if (title) {
            return (
                <div
                    className={classnames(
                        `${prefixCls}__header`,
                        'jing-hairline--bottom',
                        {
                            [`${prefixCls}__header-isolated`]:
                                !message && !children,
                        },
                    )}
                >
                    {' '}
                    {title}
                </div>
            );
        }
        return null;
    };

    const renderContent = () => {
        if (children) {
            return (
                <div className={classnames(`${prefixCls}__content`)}>
                    {children}
                </div>
            );
        }

        if (message) {
            return (
                <div
                    className={classnames(`${prefixCls}__content`, {
                        [`${prefixCls}__content-isolated`]: !title,
                    })}
                >
                    <div
                        className={classnames(`${prefixCls}__message`, {
                            [`${prefixCls}__message-has-title`]: title,
                            [`${prefixCls}__message-${messageAlign}`]:
                                messageAlign,
                        })}
                    >
                        {message}
                    </div>
                </div>
            );
        }
        return null;
    };

    const renderFooter = () => {
        if (footer) return footer;
        return (
            <div className={classnames(`${prefixCls}__footer`, BORDER_TOP)}>
                {showCancelButton && (
                    <Button
                        size="large"
                        text={cancelButtonText || '取消'}
                        className={`${prefixCls}__cancel`}
                        style={{ color: cancelButtonColor }}
                        loading={props.cancelProps?.loading}
                        disabled={props.cancelProps?.disabled}
                        onClick={
                            props.cancelProps?.loading
                                ? noop
                                : (onCancel as () => void)
                        }
                    />
                )}
                {showConfirmButton && (
                    <Button
                        size="large"
                        text={confirmButtonText || '确认'}
                        className={classnames(
                            `${prefixCls}__confirm`,
                            BORDER_LEFT,
                        )}
                        style={{ color: confirmButtonColor }}
                        loading={props.confirmProps?.loading}
                        disabled={props.confirmProps?.disabled}
                        onClick={
                            props.confirmProps?.loading
                                ? noop
                                : (onConfirm as () => void)
                        }
                    />
                )}
            </div>
        );
    };

    return (
        <Popup
            visible={visible}
            className={classes}
            style={{ width: addUnit(width) }}
            aria-labelledby={title || message}
            closeOnClickOverlay={closeOnClickOverlay}
            onClose={onClose}
            onClosed={onClosed}
            {...others}
        >
            {renderTitle()}
            {renderContent()}
            {renderFooter()}
        </Popup>
    );
};

Modal.defaultProps = {
    messageAlign: 'center',
    showConfirmButton: true,
    confirmButtonText: '确定',
    closeOnPopstate: true,
};

export default Modal;
