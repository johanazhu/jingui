import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import arrow from '../svg/arrow.svg';

const Arrow = (props: JqbIconProps) => {
    return <JqbIcon icon={arrow} color="grey" {...props} />;
};

export default React.memo(Arrow);
