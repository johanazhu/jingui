import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import Home from '../../svg/tabbar-home.svg';

const TabbarHome = (props: JqbIconProps) => {
    return <JqbIcon icon={Home} color="grey" {...props} />;
};

export default TabbarHome;
