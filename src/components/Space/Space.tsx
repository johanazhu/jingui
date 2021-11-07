import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { SpaceProps } from './PropType';

const Space: FC<SpaceProps> = (props) => {

    const { scale, className, style  }= props;
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
