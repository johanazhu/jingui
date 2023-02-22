import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import email from '../svg/email.svg';

const Email = (props: JqbIconProps) => {
    return <JqbIcon icon={email} fill="#26a4a4" {...props} />;
};

export default Email;
