import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import jiangsu from '../../svg/bank/JSU.svg';

// 江苏
const JSU = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={jiangsu}
            {...props}
        />
    );
};

export default JSU;
