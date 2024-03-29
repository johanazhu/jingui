import React, { FC, useContext } from 'react';
import classnames from 'classnames';
import { IconLoading } from '../Icon';
import { ButtonProps } from './PropType';
import ButtonContext from './Context';
import { WHITE } from '@/utils';

const prefixCls = 'jing-button';

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        style,
        type,
        plain,
        round,
        size,
        disabled,
        loading,
        block,
        color,
        text,
        children,
        onClick,
    } = props;

    const { parent } = useContext(ButtonContext);

    // console.log('props', props);
    // console.log('parent', parent);

    const _style: Record<string, string | number> = { ...style };

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
        [`${prefixCls}--${parent?.size || size}`]: parent?.size || !!size,
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
        <> {children || text} </>
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

export default Button;
