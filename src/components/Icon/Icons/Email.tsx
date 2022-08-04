import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import email from '../svg/email.svg';

const Email = (props: JqbIconProps) => {
    return <JqbIcon icon={email} {...props} />;
};

export default Email;
