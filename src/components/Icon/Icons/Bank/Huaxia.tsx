import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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
