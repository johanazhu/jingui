import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import User from '../../svg/tabbar-user.svg';

const TabbarUser = (props: JqbIconProps) => {
    return <JqbIcon icon={User} color="grey" {...props} />;
};

export default React.memo(TabbarUser);
