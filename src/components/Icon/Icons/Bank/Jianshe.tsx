import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import jianshe from '../../svg/bank/JSH.svg';

// 建设
const JSH = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={jianshe}
            {...props}
        />
    );
};

export default JSH;
