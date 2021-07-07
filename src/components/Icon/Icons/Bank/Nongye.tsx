import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import nongye from '../../svg/bank/NY.svg';

// 农业
const NY = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={nongye}
            {...props}
        />
    );
};

export default React.memo(NY);
