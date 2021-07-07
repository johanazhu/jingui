import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import moneyPlusFull from '../svg/money_plus_full.svg';

const MoneyPlusFull = (props: JqbIconProps) => {
    return <JqbIcon icon={moneyPlusFull} color="" {...props} />;
};

export default React.memo(MoneyPlusFull);
