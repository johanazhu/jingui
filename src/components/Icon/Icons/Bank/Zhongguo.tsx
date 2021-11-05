import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import zhongguo from '../../svg/bank/ZG.svg';

// 中国
const ZG = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={zhongguo}
            {...props}
        />
    );
};

export default React.memo(ZG);
