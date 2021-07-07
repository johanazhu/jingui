import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import lock from '../svg/lock.svg';

const Lock = (props: JqbIconProps) => {
    return <JqbIcon icon={lock} {...props} />;
};

export default React.memo(Lock);
