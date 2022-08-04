import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import exclamation from '../svg/exclamation.svg';

const Exclamation = (props: JqbIconProps) => {
    return <JqbIcon icon={exclamation} {...props} />;
};

export default Exclamation;
