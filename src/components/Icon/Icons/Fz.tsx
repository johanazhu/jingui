import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import fz from '../svg/fz.svg';

const FZ = (props: JqbIconProps) => {
    return <JqbIcon icon={fz} color="grey" {...props} />;
};

export default FZ;
