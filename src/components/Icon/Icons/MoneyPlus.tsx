import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import moneyPlus from '../svg/money_plus.svg';

const MoneyPlus = (props: JqbIconProps) => {
    return <JqbIcon icon={moneyPlus} {...props} />;
};

export default React.memo(MoneyPlus);
