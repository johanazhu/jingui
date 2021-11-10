import React, { FC } from 'react';
import classnames from 'classnames';
import { IconLoading } from '../Icon';
import { ButtonProps } from './PropType';
import { WHITE } from '@/utils';

const prefixCls = 'jing-button';

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        type,
        plain,
        round,
        size,
        disabled,
        loading,
        block,
        color,
        children,
        onClick,
    } = props;

    const _style: Record<string, string | number> = {};

    if (color) {
        _style.color = plain ? color : WHITE;

        if (!plain) {
            _style.background = color;
        }

        if (color.indexOf('gradient') !== -1) {
            _style.border = 0;
        } else {
            _style.borderColor = color;
        }
    }

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--${type}`]: !!type,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--plain`]: !!plain,
        [`${prefixCls}--round`]: !!round,
        [`${prefixCls}--disabled`]: !!disabled,
        [`${prefixCls}--loading`]: !!loading,
        [`${prefixCls}--block`]: !!block,
    });

    const contentRender = loading ? (
        <div className={`${prefixCls}__content`}>
            <IconLoading />
            <span className={`${prefixCls}__content-span`}>{children}</span>
        </div>
    ) : (
        <> {children}</>
    );

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
            style={_style}
        >
            {contentRender}
        </button>
    );
};

Button.defaultProps = {
    type: 'default',
    size: 'normal',
    block: false,
};

export default React.memo(Button);
