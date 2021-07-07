import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
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

export default React.memo(HF);
