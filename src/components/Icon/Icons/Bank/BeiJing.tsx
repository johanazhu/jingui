import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import beijing from '../../svg/bank/BJ.svg';

// 北京
const BJ = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={beijing}
            {...props}
        />
    );
};

export default BJ;
