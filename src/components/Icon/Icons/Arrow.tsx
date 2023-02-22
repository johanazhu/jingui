import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import arrow from '../svg/arrow.svg';


const Arrow = (props: JqbIconProps) => {
    return <JqbIcon icon={arrow} color="grey" {...props} />;
};

export default Arrow;
