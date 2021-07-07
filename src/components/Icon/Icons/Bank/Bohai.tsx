import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import bohai from '../../svg/bank/BH.svg';

// 渤海
const BH = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={bohai}
            {...props}
        />
    );
};

export default React.memo(BH);
