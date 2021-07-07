import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import coin2 from '../svg/coin2.svg';

const Coin2 = (props: JqbIconProps) => {
    return <JqbIcon icon={coin2} {...props} />;
};

export default React.memo(Coin2);
