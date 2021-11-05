import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import clothbag from '../svg/clothbag.svg';

const Clothbag = (props: JqbIconProps) => {
    return <JqbIcon icon={clothbag} {...props} />;
};

export default React.memo(Clothbag);
