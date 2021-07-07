import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import waiting from '../svg/waiting.svg';

const Waiting = (props: JqbIconProps) => {
    return <JqbIcon icon={waiting} {...props} />;
};

export default React.memo(Waiting);
