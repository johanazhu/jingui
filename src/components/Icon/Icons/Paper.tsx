import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import paper from '../svg/paper.svg';

const Paper = (props: JqbIconProps) => {
    return <JqbIcon icon={paper} {...props} />;
};

export default React.memo(Paper);
