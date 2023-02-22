import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import paper from '../svg/paper.svg';

const Paper = (props: JqbIconProps) => {
    return <JqbIcon icon={paper} fill="#26a4a4" {...props} />;
};

export default Paper;
