import * as React from 'react';
import classnames from 'classnames';
import IconBase, { IconbaseProps } from './IconBase';

export interface JqbIconProps extends IconbaseProps {
    className?: string;
    onClick?: (e: any) => void;
    color?: string;
    size?: string;
    icon?: any;
    style?: any;
    keepOriginColor?: boolean; // 保持原来的颜色
}

const JqbIcon: React.FC<JqbIconProps> = (props) => {
    const { className, onClick, icon, color, size, style, keepOriginColor } =
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

    function onHandleClick(e: any) {
        onClick && onClick(e);
    }

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
