import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import moneyPlusMenu from '../../svg/short_cut_menu/money_plus.svg';

const MoneyPlusMenu = (props: JqbIconProps) => {
    return <JqbIcon icon={moneyPlusMenu} {...props} />;
};

export default MoneyPlusMenu;
