import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import callcenter from '../svg/callcenter.svg';

const Callcenter = (props: JqbIconProps) => {
    return <JqbIcon icon={callcenter} color="grey" {...props} />;
};

export default Callcenter;
