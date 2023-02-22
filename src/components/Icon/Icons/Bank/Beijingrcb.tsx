import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import beijingrcb from '../../svg/bank/BJRCB.svg';

// 北京农村商业银行
const BJRCB = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={beijingrcb}
            {...props}
        />
    );
};

export default BJRCB;
