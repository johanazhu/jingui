import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import circleok from '../svg/circleok.svg';

const CircleOk = (props: JqbIconProps) => {
    return <JqbIcon icon={circleok} color="grey" {...props} />;
};

export default CircleOk;
