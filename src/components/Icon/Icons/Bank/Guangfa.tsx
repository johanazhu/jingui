import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import guangfa from '../../svg/bank/GF.svg';

// 广发
const GF = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={guangfa}
            {...props}
        />
    );
};

export default React.memo(GF);
