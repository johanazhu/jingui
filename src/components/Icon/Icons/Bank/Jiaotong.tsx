import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import jiaotong from '../../svg/bank/JT.svg';

// 江苏
const JT = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={jiaotong}
            {...props}
        />
    );
};

export default JT;
