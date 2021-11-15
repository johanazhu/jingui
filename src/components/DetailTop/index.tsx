import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

export interface DetailTopProps {
    bigText: any;
    text: String;
    desc: String;
    bigTextStyle?: React.CSSProperties;
    className?: string;
    descClassName?: string;
    color?: string; // green orange 默认黑色
}

const DetailTop = (props: DetailTopProps) => {
    const {
        bigText,
        text,
        desc,
        bigTextStyle,
        className,
        descClassName,
        color,
    } = props;
    return (
        <div className="DetailTop">
            <div
                className={classnames(
                    'DetailTop-bigtext',
                    className,
                    `DetailTop-bigtext-${color}`,
                )}
                style={bigTextStyle}
            >
                {' '}
                {bigText}
            </div>
            <div className="DetailTop-text"> {text}</div>
            <div className={classnames('DetailTop-desc', descClassName)}>
                {' '}
                {desc}
            </div>
        </div>
    );
};

DetailTop.defaultProps = {
    bigText: '',
    text: '',
    desc: '',
};

DetailTop.propTypes = {
    text: PropTypes.string,
    desc: PropTypes.string,
    bigTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default React.memo(DetailTop);
