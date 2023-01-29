import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import find from '../svg/find.svg';

const Find = (props: JqbIconProps) => {
    return <JqbIcon icon={find} keepOriginColor {...props} />;
};

export default Find;
