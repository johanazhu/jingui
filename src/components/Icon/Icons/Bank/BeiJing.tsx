import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import beijing from '../../svg/bank/BJ.svg';

// 北京
const BJ = (props: JqbIconProps) => {
    return (
        <JqbIcon
            keepOriginColor={props.keepOriginColor || true}
            icon={beijing}
            {...props}
        />
    );
};

export default React.memo(BJ);
