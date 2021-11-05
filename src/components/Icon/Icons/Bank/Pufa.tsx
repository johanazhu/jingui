import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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
