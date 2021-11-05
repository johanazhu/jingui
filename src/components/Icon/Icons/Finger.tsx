import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import finger from '../svg/finger.svg';

const Finger = (props: JqbIconProps) => {
    return <JqbIcon icon={finger} {...props} />;
};

export default React.memo(Finger);
