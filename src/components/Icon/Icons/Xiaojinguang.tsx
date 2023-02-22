import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import xiaojinguang from '../svg/xiaojinguang.svg';

const Xiaojinguang = (props: JqbIconProps) => {
    return <JqbIcon icon={xiaojinguang} fill="#26a4a4" {...props} />;
};

export default Xiaojinguang;
