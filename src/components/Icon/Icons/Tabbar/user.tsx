import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import User from '../../svg/tabbar-user.svg';

const TabbarUser = (props: JqbIconProps) => {
    return <JqbIcon icon={User} color="grey" {...props} />;
};

export default TabbarUser;
