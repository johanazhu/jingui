import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import more2 from '../svg/more2.svg';

const More2 = (props: JqbIconProps) => {
    return <JqbIcon icon={more2} color="" {...props} />;
};

export default React.memo(More2);
