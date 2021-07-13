import * as React from 'react';
import classnames from 'classnames';
import IconBase, { IconbaseProps } from './IconBase';


export type IconSize = 'sm' | 'md' | 'lg' | 'auto';

export interface JqbIconProps extends IconbaseProps {
    className?: string;
    color?: string;
    size?: IconSize;
    icon?: any;
    style?: React.CSSProperties;
    keepOriginColor?: boolean;
    onClick?: (e: any) => void;
}

const JqbIcon: React.FC<JqbIconProps> = (props) => {
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
