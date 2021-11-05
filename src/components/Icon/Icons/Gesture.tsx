import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import gesture from '../svg/gesture.svg';

const Gesture = (props: JqbIconProps) => {
    return <JqbIcon icon={gesture} {...props} />;
};

export default React.memo(Gesture);
