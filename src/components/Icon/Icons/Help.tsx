import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import help from '../svg/help.svg';

const Help = (props: JqbIconProps) => {
    return <JqbIcon icon={help} {...props} />;
};

export default React.memo(Help);
