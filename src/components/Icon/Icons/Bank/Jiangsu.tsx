import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import jiangsu from '../../svg/bank/JSU.svg';

// 江苏
const JSU = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={jiangsu}
            {...props}
        />
    );
};

export default React.memo(JSU);
