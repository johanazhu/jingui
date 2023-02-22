import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import password from '../svg/password.svg';

const Password = (props: JqbIconProps) => {
    return <JqbIcon icon={password} fill="#26a4a4" {...props} />;
};

export default Password;
