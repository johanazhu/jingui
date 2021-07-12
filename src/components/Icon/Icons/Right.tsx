import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import right from '../svg/right.svg';

const Right = (props: JqbIconProps) => {
    return <JqbIcon icon={right} {...props} />;
};

export default React.memo(Right);
