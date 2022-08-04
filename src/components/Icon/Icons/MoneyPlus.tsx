import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import moneyPlus from '../svg/money_plus.svg';

const MoneyPlus = (props: JqbIconProps) => {
    return <JqbIcon icon={moneyPlus} {...props} />;
};

export default MoneyPlus;
