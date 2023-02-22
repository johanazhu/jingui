import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import user from '../svg/user.svg';


const User = (props: JqbIconProps) => {
    return <JqbIcon icon={user} fill="#26a4a4" {...props} />;
};

export default User;
