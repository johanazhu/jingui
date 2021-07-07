import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import guangdongnongxin from '../../svg/bank/GDNX.svg';

// 广东省农村信用社联合社
const GDNX = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={guangdongnongxin}
            {...props}
        />
    );
};

export default React.memo(GDNX);
