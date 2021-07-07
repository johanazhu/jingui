import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import safe from '../svg/safe.svg';

const Safe = (props: JqbIconProps) => {
    return <JqbIcon icon={safe} color="" {...props} />;
};

export default React.memo(Safe);
