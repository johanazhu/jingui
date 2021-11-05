import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import safe from '../svg/safe.svg';

const Safe = (props: JqbIconProps) => {
    return <JqbIcon icon={safe} color="" {...props} />;
};

export default React.memo(Safe);
