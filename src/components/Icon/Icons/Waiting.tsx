import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import waiting from '../svg/waiting.svg';

const Waiting = (props: JqbIconProps) => {
    return <JqbIcon icon={waiting} fill="#26a4a4" {...props} />;
};

export default Waiting;
