import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';


export interface MaskProps {
    className?: string;
    transparent?: boolean;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const Mask = (props: MaskProps, { }) => {
    const { className, transparent, style, onClick, ...others } = props;

    const classes = classnames(
        {
            'jing-mask': !transparent,
            'jing-mask__transparent': transparent,
        },
        className,
    );

    function handleClick() {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return <div className={classes} style={style} {...others} onClick={handleClick} />;
};

Mask.defaultProps = {
    transparent: false,
};

Mask.propTypes = {
    className: PropTypes.string,
    transparent: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default React.memo(Mask);
