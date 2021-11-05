import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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
