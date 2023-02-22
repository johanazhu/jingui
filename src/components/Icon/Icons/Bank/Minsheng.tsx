import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import minsheng from '../../svg/bank/MS.svg';

// 民生
const MS = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={minsheng}
            {...props}
        />
    );
};

export default MS;
