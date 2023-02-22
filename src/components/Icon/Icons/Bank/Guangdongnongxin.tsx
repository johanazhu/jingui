import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import guangdongnongxin from '../../svg/bank/GDNX.svg';

// 广东省农村信用社联合社
const GDNX = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={guangdongnongxin}
            {...props}
        />
    );
};

export default GDNX;
