import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import forward from '../svg/forward.svg';

const Forward = (props: JqbIconProps) => {
    return <JqbIcon icon={forward} {...props} />;
};

export default React.memo(Forward);
