import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import finger from '../svg/finger.svg';

const Finger = (props: JqbIconProps) => {
    return <JqbIcon icon={finger} {...props} />;
};

export default React.memo(Finger);
