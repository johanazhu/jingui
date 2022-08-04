import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import zhongxin from '../../svg/bank/ZX.svg';

// 中信
const ZX = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={zhongxin}
            {...props}
        />
    );
};

export default ZX;
