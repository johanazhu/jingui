import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { DetailTopProps } from './PropType';

const prefixCls = 'jing-detailtop';

const DetailTop: FC<DetailTopProps> = (props) => {
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
        <div className={prefixCls}>
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

export default memo(DetailTop);
