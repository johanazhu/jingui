import React, { FC, memo } from 'react';
import classnames from 'classnames';

interface SpaceProps {
    scale?: any;
    className?: any;
    style?: React.CSSProperties;
}

const Space: FC<SpaceProps> = ({ scale = 1, className, style }) => {
    return (
        <div
            className={classnames(className, {
                [`jing-space-${scale}`]: scale,
            })}
            style={style}
        />
    );
};

export default memo(Space);
