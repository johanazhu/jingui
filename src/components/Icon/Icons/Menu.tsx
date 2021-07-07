import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import menu from '../svg/menu.svg';

const Menu = (props: JqbIconProps) => {
    return <JqbIcon icon={menu} {...props} />;
};

export default React.memo(Menu);
