import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import Home from '../../svg/tabbar-home.svg';

const TabbarHome = (props: JqbIconProps) => {
    return <JqbIcon icon={Home} color="grey" {...props} />;
};

export default React.memo(TabbarHome);
