import React, { FC, memo } from 'react';
import classnames from 'classnames';

export type scaleSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface SpaceProps {
    scale?: scaleSize;
    className?: string;
    style?: React.CSSProperties;
}

const Space: FC<SpaceProps> = ({ scale, className, style }) => {
    return (
        <div
            className={classnames(className, {
                [`jing-space-${scale}`]: scale,
            })}
            style={style}
        />
    );
};

Space.defaultProps = {
    scale: 1,
};

export default memo(Space);
