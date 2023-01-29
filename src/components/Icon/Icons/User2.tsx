import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import user2 from '../svg/user2.svg';

const User2 = (props: JqbIconProps) => {
    return <JqbIcon icon={user2} color="grey" {...props} />;
};

export default User2;
