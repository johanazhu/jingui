import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import magezine from '../svg/magezine.svg';

const Magezine = (props: JqbIconProps) => {
    return <JqbIcon icon={magezine} fill="#26a4a4" {...props} />;
};

export default Magezine;
