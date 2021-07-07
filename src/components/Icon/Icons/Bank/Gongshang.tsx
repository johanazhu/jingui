import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import gongshang from '../../svg/bank/GS.svg';

// 工商
const GS = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={gongshang}
            {...props}
        />
    );
};

export default React.memo(GS);
