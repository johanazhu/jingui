import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import security from '../svg/security.svg';

const Security = (props: JqbIconProps) => {
    return <JqbIcon icon={security} {...props} />;
};

export default React.memo(Security);
