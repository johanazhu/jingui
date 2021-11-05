import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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
