import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import radiook from '../svg/radiook.svg';

const RadioOk = (props: JqbIconProps) => {
    return <JqbIcon icon={radiook} fill="#26a4a4" {...props} />;
};

export default RadioOk;
