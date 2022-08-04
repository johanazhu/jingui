import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import more from '../svg/more.svg';

const More = (props: JqbIconProps) => {
    return <JqbIcon icon={more} {...props} />;
};

export default More;
