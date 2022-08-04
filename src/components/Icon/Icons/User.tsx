import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import user from '../svg/user.svg';

const User = (props: JqbIconProps) => {
    return <JqbIcon icon={user} {...props} />;
};

export default User;
