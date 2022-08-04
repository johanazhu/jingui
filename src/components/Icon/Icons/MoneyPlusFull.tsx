import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import moneyPlusFull from '../svg/money_plus_full.svg';

const MoneyPlusFull = (props: JqbIconProps) => {
    return <JqbIcon icon={moneyPlusFull} color="" {...props} />;
};

export default MoneyPlusFull;
