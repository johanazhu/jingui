import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import coin from '../svg/coin.svg';

const Coin = (props: JqbIconProps) => {
    return <JqbIcon icon={coin} color="grey" {...props} />;
};

export default React.memo(Coin);
