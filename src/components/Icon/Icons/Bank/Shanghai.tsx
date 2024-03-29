import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import shanghai from '../../svg/bank/SH.svg';

// 上海
const SH = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={shanghai}
            {...props}
        />
    );
};

export default SH;
