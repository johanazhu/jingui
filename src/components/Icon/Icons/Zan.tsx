import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import zan from '../svg/zan.svg';

const Zan = (props: JqbIconProps) => {
    return <JqbIcon icon={zan} fill="#de3813" {...props} />;
};

export default Zan;
