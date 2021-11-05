import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import license from '../svg/license.svg';

const License = (props: JqbIconProps) => {
    return <JqbIcon icon={license} {...props} />;
};

export default React.memo(License);
