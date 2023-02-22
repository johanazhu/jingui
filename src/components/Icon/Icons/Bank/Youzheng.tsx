import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import youzheng from '../../svg/bank/YZ.svg';

// 邮政储蓄
const YZ = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={youzheng}
            {...props}
        />
    );
};

export default YZ;
