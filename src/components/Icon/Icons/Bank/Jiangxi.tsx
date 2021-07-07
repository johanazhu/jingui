import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
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

export default React.memo(JX);
