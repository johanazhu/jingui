import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import security from '../svg/security.svg';

const Security = (props: JqbIconProps) => {
    return <JqbIcon icon={security} color="green" {...props} />;
};

export default Security;
