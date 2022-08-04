import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import hengfeng from '../../svg/bank/HF.svg';

// 恒丰银行
const HF = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={hengfeng}
            {...props}
        />
    );
};

export default HF;
