import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import clothbag from '../svg/clothbag.svg';

const Clothbag = (props: JqbIconProps) => {
    return <JqbIcon icon={clothbag} {...props} />;
};

export default React.memo(Clothbag);
