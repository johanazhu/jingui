import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import guangfa from '../../svg/bank/GF.svg';

// 广发
const GF = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={guangfa}
            {...props}
        />
    );
};

export default GF;
