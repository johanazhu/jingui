import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import lock from '../svg/lock.svg';

const Lock = (props: JqbIconProps) => {
    return <JqbIcon icon={lock} {...props} />;
};

export default React.memo(Lock);
