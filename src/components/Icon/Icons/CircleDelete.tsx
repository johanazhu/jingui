import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import circledelete from '../svg/circledelete.svg';

const CircleDelete = (props: JqbIconProps) => {
    return <JqbIcon icon={circledelete} color="grey" {...props} />;
};

export default CircleDelete;
