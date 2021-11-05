import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import bank from '../svg/bank.svg';

const Bank = (props: JqbIconProps) => {
    return <JqbIcon icon={bank} {...props} />;
};

export default React.memo(Bank);
