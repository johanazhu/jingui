import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import rmb from '../svg/rmb.svg';

const Rmb = (props: JqbIconProps) => {
    return <JqbIcon icon={rmb}  {...props} />;
};

export default Rmb;
