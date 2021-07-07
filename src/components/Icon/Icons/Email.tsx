import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import email from '../svg/email.svg';

const Email = (props: JqbIconProps) => {
    return <JqbIcon icon={email} {...props} />;
};

export default React.memo(Email);
