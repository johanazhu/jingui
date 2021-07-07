import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import pingan from '../../svg/bank/PA.svg';

// 平安
const PA = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={pingan}
            {...props}
        />
    );
};

export default React.memo(PA);
