import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import guangzhourcb from '../../svg/bank/GZRCB.svg';

// 广州农村商业银行
const GZRCB = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={guangzhourcb}
            {...props}
        />
    );
};

export default React.memo(GZRCB);
