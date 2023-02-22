import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import huaxia from '../../svg/bank/HX.svg';

// 华夏
const HX = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={huaxia}
            {...props}
        />
    );
};

export default HX;
