import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import authen from '../svg/authen.svg';

const Authen = (props: JqbIconProps) => {
    return <JqbIcon icon={authen} {...props} />;
};

export default Authen;
