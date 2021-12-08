import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { RadioProps } from './PropType';

const prefixCls = 'jing-radio';

const Radio: FC<RadioProps> = (props) => {
    const { scale, className, style } = props;
    return (
        <div
            className={classnames(className, {
                [`jing-Radio-${scale}`]: scale,
            })}
            style={style}
        />
    );
};

export default memo(Radio);
