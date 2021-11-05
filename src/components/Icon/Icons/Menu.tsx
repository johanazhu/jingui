import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import menu from '../svg/menu.svg';

const Menu = (props: JqbIconProps) => {
    return <JqbIcon icon={menu} {...props} />;
};

export default React.memo(Menu);
