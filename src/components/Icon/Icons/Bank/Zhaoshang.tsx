import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import zhaoshang from '../../svg/bank/ZS.svg';

// 招商
const ZS = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={zhaoshang}
            {...props}
        />
    );
};

export default React.memo(ZS);
