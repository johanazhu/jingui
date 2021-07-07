import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import circleok from '../svg/circleok.svg';

const CircleOk = (props: JqbIconProps) => {
    return <JqbIcon icon={circleok} color="grey" {...props} />;
};

export default React.memo(CircleOk);
