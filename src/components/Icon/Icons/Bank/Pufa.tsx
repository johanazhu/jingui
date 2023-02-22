import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import pufa from '../../svg/bank/PF.svg';

// 浦发
const PF = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={pufa}
            {...props}
        />
    );
};

export default PF;
