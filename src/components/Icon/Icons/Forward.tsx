import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import forward from '../svg/forward.svg';

const Forward = (props: JqbIconProps) => {
    return <JqbIcon icon={forward} {...props} />;
};

export default React.memo(Forward);
