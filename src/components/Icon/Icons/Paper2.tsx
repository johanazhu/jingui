import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import paper2 from '../svg/paper2.svg';

const Paper2 = (props: JqbIconProps) => {
    return <JqbIcon icon={paper2} color="" {...props} />;
};

export default React.memo(Paper2);
