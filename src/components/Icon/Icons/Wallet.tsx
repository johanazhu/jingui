import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import wallet from '../svg/wallet.svg';

const Wallet = (props: JqbIconProps) => {
    return <JqbIcon icon={wallet} {...props} />;
};

export default React.memo(Wallet);
