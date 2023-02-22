import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import id from '../svg/id.svg';

const Id = (props: JqbIconProps) => {
    return <JqbIcon icon={id} fill="#26a4a4" {...props} />;
};

export default Id;
