import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import nanjing from '../../svg/bank/NJ.svg';

// 南京
const NJ = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={nanjing}
            {...props}
        />
    );
};

export default NJ;
