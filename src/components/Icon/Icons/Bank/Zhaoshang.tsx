import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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

export default ZS;
