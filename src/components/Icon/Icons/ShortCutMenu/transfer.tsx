import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import transferMenu from '../../svg/short_cut_menu/transfer.svg';

const TransferMenu = (props: JqbIconProps) => {
    return <JqbIcon icon={transferMenu} {...props} />;
};

export default TransferMenu;
