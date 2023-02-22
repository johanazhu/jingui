import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import nongye from '../../svg/bank/NY.svg';

// 农业
const NY = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={nongye}
            {...props}
        />
    );
};

export default NY;
