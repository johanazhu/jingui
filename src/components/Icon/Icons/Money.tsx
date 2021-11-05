import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import money from '../svg/money.svg';

const Money = (props: JqbIconProps) => {
    return <JqbIcon icon={money} {...props} />;
};

export default React.memo(Money);
