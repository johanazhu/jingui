import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import medal from '../svg/medal.svg';

const Medal = (props: JqbIconProps) => {
    return <JqbIcon icon={medal} fill="#26a4a4" {...props} />;
};

export default Medal;
