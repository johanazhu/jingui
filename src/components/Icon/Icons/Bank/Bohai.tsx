import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import bohai from '../../svg/bank/BH.svg';

// 渤海
const BH = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={bohai}
            {...props}
        />
    );
};

export default BH;
