import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import user from '../svg/user.svg';

const User = (props: JqbIconProps) => {
    return <JqbIcon icon={user} {...props} />;
};

export default React.memo(User);
