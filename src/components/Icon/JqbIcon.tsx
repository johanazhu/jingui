import React, { FC, MouseEvent, TouchEvent } from 'react';
import classnames from 'classnames';
import IconBase from './IconBase';
import { JqbIconProps } from './PropType';

const prefixCls = 'jing-icon';

const JqbIcon: FC<JqbIconProps> = (props) => {
    const { className, color, size, icon, style, fill } = props;


    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--${size}`]: !!size,
    });

    const onClick = (
        event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>,
    ) => {
        props.onClick?.(event);
    };

    return (
        <span
            style={style}
            role="img"
            aria-label={icon.name}
            onClick={onClick}
            className={classes}
        >
            <IconBase {...props} />
        </span>
    );
};

JqbIcon.defaultProps = {
    size: 'md',
};

export default JqbIcon;
