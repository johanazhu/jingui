import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import xingye from '../../svg/bank/XY.svg';

// 兴业
const XY = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={xingye}
            {...props}
        />
    );
};

export default React.memo(XY);
