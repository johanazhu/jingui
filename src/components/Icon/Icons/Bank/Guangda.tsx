import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import guangda from '../../svg/bank/GD.svg';

// 光大银行
const GD = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={guangda}
            {...props}
        />
    );
};

export default GD;
