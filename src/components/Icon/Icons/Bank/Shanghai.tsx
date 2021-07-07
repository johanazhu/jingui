import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import shanghai from '../../svg/bank/SH.svg';

// 上海
const SH = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={shanghai}
            {...props}
        />
    );
};

export default React.memo(SH);
