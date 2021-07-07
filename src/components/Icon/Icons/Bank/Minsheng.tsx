import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import minsheng from '../../svg/bank/MS.svg';

// 民生
const MS = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={minsheng}
            {...props}
        />
    );
};

export default React.memo(MS);
