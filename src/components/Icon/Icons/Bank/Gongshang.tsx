import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import gongshang from '../../svg/bank/GS.svg';

// 工商
const GS = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={gongshang}
            {...props}
        />
    );
};

export default GS;
