import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import xingye from '../../svg/bank/XY.svg';

// 兴业
const XY = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={xingye}
            {...props}
        />
    );
};

export default XY;
