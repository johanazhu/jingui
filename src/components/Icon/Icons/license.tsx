import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import license from '../svg/license.svg';

const License = (props: JqbIconProps) => {
    return <JqbIcon icon={license} {...props} />;
};

export default React.memo(License);
