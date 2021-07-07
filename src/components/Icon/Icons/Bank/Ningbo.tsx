import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import ningbo from '../../svg/bank/NB.svg';

// 宁波
const NB = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={ningbo}
            {...props}
        />
    );
};

export default React.memo(NB);
