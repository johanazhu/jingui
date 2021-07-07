import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
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
