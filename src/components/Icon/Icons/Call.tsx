import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import call from '../svg/call.svg';

const Call = (props: JqbIconProps) => {
    return <JqbIcon icon={call} fill="#26a4a4" {...props} />;
};

export default Call;
