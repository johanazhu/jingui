import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import waiting from '../svg/waiting.svg';

const Waiting = (props: JqbIconProps) => {
    return <JqbIcon icon={waiting} {...props} />;
};

export default React.memo(Waiting);
