import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import rmb from '../svg/rmb.svg';

const Rmb = (props: JqbIconProps) => {
    return <JqbIcon icon={rmb} color="" {...props} />;
};

export default React.memo(Rmb);
