import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import transferMenu from '../../svg/short_cut_menu/transfer.svg';

const TransferMenu = (props: JqbIconProps) => {
    return <JqbIcon icon={transferMenu} {...props} />;
};

export default React.memo(TransferMenu);
