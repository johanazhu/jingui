import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import bank from '../svg/bank.svg';

const Bank = (props: JqbIconProps) => {
    return <JqbIcon icon={bank} {...props} />;
};

export default React.memo(Bank);
