import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import jiaotong from '../../svg/bank/JT.svg';

// 江苏
const JT = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={jiaotong}
            {...props}
        />
    );
};

export default React.memo(JT);
