import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import help from '../svg/help.svg';

const Help = (props: JqbIconProps) => {
    return <JqbIcon icon={help} {...props} />;
};

export default React.memo(Help);
