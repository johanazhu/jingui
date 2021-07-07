import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import money from '../svg/money.svg';

const Money = (props: JqbIconProps) => {
    return <JqbIcon icon={money} {...props} />;
};

export default React.memo(Money);
