import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import pufa from '../../svg/bank/PF.svg';

// 浦发
const PF = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={pufa}
            {...props}
        />
    );
};

export default React.memo(PF);
