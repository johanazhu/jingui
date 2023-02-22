import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import money from '../svg/money.svg';

const Money = (props: JqbIconProps) => {
    return <JqbIcon icon={money} fill="#26a4a4" {...props} />;
};

export default Money;
