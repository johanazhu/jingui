import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import pingan from '../../svg/bank/PA.svg';

// 平安
const PA = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={pingan}
            {...props}
        />
    );
};

export default PA;
