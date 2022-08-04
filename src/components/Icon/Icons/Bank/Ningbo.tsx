import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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

export default NB;
