import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import password from '../svg/password.svg';

const Password = (props: JqbIconProps) => {
    return <JqbIcon icon={password} {...props} />;
};

export default React.memo(Password);
