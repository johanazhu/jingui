import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import exclamation from '../svg/exclamation.svg';

const Exclamation = (props: JqbIconProps) => {
    return <JqbIcon icon={exclamation} fill="#26a4a4" {...props} />;
};

export default Exclamation;
