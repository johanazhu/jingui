import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import more2 from '../svg/more2.svg';

const More2 = (props: JqbIconProps) => {
    return <JqbIcon icon={more2} color="" {...props} />;
};

export default React.memo(More2);
