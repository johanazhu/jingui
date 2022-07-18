import React, { FC } from 'react';
import classnames from 'classnames';
import { ModalProps } from './PropType';
import Popup from '../Popup';
import Button from '../Button';
import { addUnit } from '@/utils';

const prefixCls = 'jing-modal';

const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        style,
        title,
        visible,
        message,
        messageAlign = 'center',
        width = '320px',
        closeOnClickOverlay,
        footer,
        children,
        showCancelButton,
        showConfirmButton = true,
        cancelButtonText,
        confirmButtonText = '确定',
        cancelButtonColor,
        confirmButtonColor,
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
                    className={classnames(`${prefixCls}__header`, {
                        [`${prefixCls}__header-isolated`]:
                            !message && !children,
                    })}
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
            <div className={classnames(`${prefixCls}__footer`)}>
                {showCancelButton && (
                    <Button
                        size="large"
                        text={cancelButtonText || '取消'}
                        className={`${prefixCls}__cancel`}
                        style={{ color: cancelButtonColor }}
                        onClick={onCancel}
                    />
                )}
                {showConfirmButton && (
                    <Button
                        size="large"
                        text={confirmButtonText || '确认'}
                        className={`${prefixCls}__confirm`}
                        style={{ color: confirmButtonColor }}
                        onClick={onConfirm}
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

// width, messageAlign, showConfirmButton, confirmButtonText
Modal.defaultProps = {
    width: '320px',
    messageAlign: 'center',
    showConfirmButton: true,
    confirmButtonText: '确定',
    closeOnPopstate: true,
};

export default Modal;
