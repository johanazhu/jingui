import React, { MouseEventHandler, CSSProperties, FC } from 'react';
import classnames from 'classnames';
import IconBase from './IconBase';
import { JqbIconProps } from './PropType';

const JqbIcon: FC<JqbIconProps> = (props) => {
    const { className, color, size, icon, style, keepOriginColor, onClick } =
        props;
    const classes = classnames(
        'jing-icon',
        {
            [`jing-icon--${color}`]:
                Boolean(color) && !Boolean(keepOriginColor),
            [`jing-icon--${size}`]: Boolean(size),
        },
        className,
    );

    const onHandleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        onClick && onClick(e);
    };

    return (
        <span
            style={style}
            role="img"
            aria-label={icon.name}
            onClick={onHandleClick}
            className={classes}
        >
            <IconBase {...props} />
        </span>
    );
};

JqbIcon.defaultProps = {
    color: 'blue',
    size: 'md',
    keepOriginColor: false,
};

export default React.memo(JqbIcon);
