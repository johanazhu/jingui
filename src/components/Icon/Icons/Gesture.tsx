import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import gesture from '../svg/gesture.svg';

const Gesture = (props: JqbIconProps) => {
    return <JqbIcon icon={gesture} {...props} />;
};

export default React.memo(Gesture);
