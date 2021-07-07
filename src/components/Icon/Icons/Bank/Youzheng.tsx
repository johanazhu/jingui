import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import youzheng from '../../svg/bank/YZ.svg';

// 邮政储蓄
const YZ = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={youzheng}
            {...props}
        />
    );
};

export default React.memo(YZ);
