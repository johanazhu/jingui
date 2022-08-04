import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import jiangxi from '../../svg/bank/JX.svg';

// 江西
const JX = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={jiangxi}
            {...props}
        />
    );
};

export default JX;
