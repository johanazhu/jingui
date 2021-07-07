import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import huaxia from '../../svg/bank/HX.svg';

// 华夏
const HX = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={huaxia}
            {...props}
        />
    );
};

export default React.memo(HX);
